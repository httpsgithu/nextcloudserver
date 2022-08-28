<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2022 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

namespace OC\Collaboration\Reference;

use Fusonic\OpenGraph\Consumer;
use GuzzleHttp\Psr7\LimitStream;
use GuzzleHttp\Psr7\Utils;
use OC\Security\RateLimiting\Exception\RateLimitExceededException;
use OC\Security\RateLimiting\Limiter;
use OC\SystemConfig;
use OCP\Collaboration\Reference\IReference;
use OCP\Collaboration\Reference\IReferenceProvider;
use OCP\Files\AppData\IAppDataFactory;
use OCP\Files\NotFoundException;
use OCP\Http\Client\IClientService;
use OCP\IURLGenerator;
use Psr\Log\LoggerInterface;

class LinkReferenceProvider implements IReferenceProvider {
	public const MAX_PREVIEW_SIZE = 1024 * 1024;

	public const ALLOWED_CONTENT_TYPES = [
		'image/png',
		'image/jpg',
		'image/jpeg',
		'image/gif',
		'image/svg+xml',
		'image/webp'
	];

	private IClientService $clientService;
	private LoggerInterface $logger;
	private SystemConfig $systemConfig;
	private IAppDataFactory $appDataFactory;
	private IURLGenerator $urlGenerator;
	private Limiter $limiter;

	public function __construct(IClientService $clientService, LoggerInterface $logger, SystemConfig $systemConfig, IAppDataFactory $appDataFactory, IURLGenerator $urlGenerator, Limiter $limiter) {
		$this->clientService = $clientService;
		$this->logger = $logger;
		$this->systemConfig = $systemConfig;
		$this->appDataFactory = $appDataFactory;
		$this->urlGenerator = $urlGenerator;
		$this->limiter = $limiter;
	}

	public function matchReference(string $referenceText): bool {
		if ($this->systemConfig->getValue('reference_opengraph', true) !== true) {
			return false;
		}

		return (bool)preg_match(IURLGenerator::URL_REGEX, $referenceText);
	}

	public function resolveReference(string $referenceText): ?IReference {
		if ($this->matchReference($referenceText)) {
			$reference = new Reference($referenceText);
			$this->fetchReference($reference);
			return $reference;
		}

		return null;
	}

	private function fetchReference(Reference $reference) {
		try {
			$user = \OC::$server->getUserSession()->getUser();
			if ($user) {
				$this->limiter->registerUserRequest('opengraph', 10, 120, $user);
			} else {
				$this->limiter->registerAnonRequest('opengraph', 10, 120, \OC::$server->getRequest()->getRemoteAddress());
			}
		} catch (RateLimitExceededException $e) {
			return;
		}

		$client = $this->clientService->newClient();
		try {
			$response = $client->get($reference->getId(), [ 'timeout' => 10 ]);
		} catch (\Exception $e) {
			$this->logger->debug('Failed to fetch link for obtaining open graph data', ['exception' => $e]);
			return;
		}

		$responseBody = (string)$response->getBody();

		$reference->setUrl($reference->getId());

		// OpenGraph handling
		$consumer = new Consumer();
		$object = $consumer->loadHtml($responseBody);

		if ($object->title) {
			$reference->setTitle($object->title);
		}

		if ($object->description) {
			$reference->setDescription($object->description);
		}

		if ($object->images) {
			try {
				$appData = $this->appDataFactory->get('core');
				try {
					$folder = $appData->getFolder('opengraph');
				} catch (NotFoundException $e) {
					$folder = $appData->newFolder('opengraph');
				}
				$response = $client->get($object->images[0]->url, [ 'timeout' => 10 ]);
				$contentType = $response->getHeader('Content-Type');
				$contentLength = $response->getHeader('Content-Length');

				if (in_array($contentType, self::ALLOWED_CONTENT_TYPES, true) && $contentLength < self::MAX_PREVIEW_SIZE) {
					$stream = Utils::streamFor($response->getBody());
					$bodyStream = new LimitStream($stream, self::MAX_PREVIEW_SIZE, 0);
					$reference->setImageContentType($contentType);
					$folder->newFile(md5($reference->getId()), $bodyStream->getContents());
					$reference->setImageUrl($this->urlGenerator->linkToRouteAbsolute('core.Reference.preview', ['referenceId' => md5($reference->getId())]));
				}
			} catch (\Throwable $e) {
				$this->logger->error('Failed to fetch and store the open graph image for ' . $reference->getId(), ['exception' => $e]);
			}
		}
	}

	public function isGloballyCacheable(): bool {
		return true;
	}

	public function getCacheKey(string $referenceId): string {
		return '';
	}
}
