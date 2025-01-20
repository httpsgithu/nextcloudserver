<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\Route;

use OCP\App\IAppManager;
use OCP\Diagnostics\IEventLogger;
use OCP\ICache;
use OCP\ICacheFactory;
use OCP\IConfig;
use OCP\IRequest;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;

class CachingRouter extends Router {
	protected ICache $cache;

	public function __construct(
		ICacheFactory $cacheFactory,
		LoggerInterface $logger,
		IRequest $request,
		IConfig $config,
		IEventLogger $eventLogger,
		ContainerInterface $container,
		IAppManager $appManager,
	) {
		$this->cache = $cacheFactory->createLocal('route');
		parent::__construct($logger, $request, $config, $eventLogger, $container, $appManager);
	}

	/**
	 * Generate url based on $name and $parameters
	 *
	 * @param string $name Name of the route to use.
	 * @param array $parameters Parameters for the route
	 * @param bool $absolute
	 * @return string
	 */
	public function generate($name, $parameters = [], $absolute = false) {
		asort($parameters);
		$key = $this->context->getHost() . '#' . $this->context->getBaseUrl() . $name . sha1(json_encode($parameters)) . (int)$absolute;
		$cachedKey = $this->cache->get($key);
		if ($cachedKey) {
			return $cachedKey;
		} else {
			$url = parent::generate($name, $parameters, $absolute);
			if ($url) {
				$this->cache->set($key, $url, 3600);
			}
			return $url;
		}
	}
}
