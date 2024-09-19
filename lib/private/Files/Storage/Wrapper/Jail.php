<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\Files\Storage\Wrapper;

use OC\Files\Cache\Wrapper\CacheJail;
use OC\Files\Cache\Wrapper\JailPropagator;
use OC\Files\Cache\Wrapper\JailWatcher;
use OC\Files\Filesystem;
use OCP\Files\Cache\ICache;
use OCP\Files\Cache\IPropagator;
use OCP\Files\Cache\IWatcher;
use OCP\Files\Storage\IStorage;
use OCP\Files\Storage\IWriteStreamStorage;
use OCP\Lock\ILockingProvider;

/**
 * Jail to a subdirectory of the wrapped storage
 *
 * This restricts access to a subfolder of the wrapped storage with the subfolder becoming the root folder new storage
 */
class Jail extends Wrapper {
	/**
	 * @var string
	 */
	protected $rootPath;

	/**
	 * @param array $arguments ['storage' => $storage, 'root' => $root]
	 *
	 * $storage: The storage that will be wrapper
	 * $root: The folder in the wrapped storage that will become the root folder of the wrapped storage
	 */
	public function __construct($arguments) {
		parent::__construct($arguments);
		$this->rootPath = $arguments['root'];
	}

	public function getUnjailedPath($path): string {
		return trim(Filesystem::normalizePath($this->rootPath . '/' . $path), '/');
	}

	/**
	 * This is separate from Wrapper::getWrapperStorage so we can get the jailed storage consistently even if the jail is inside another wrapper
	 */
	public function getUnjailedStorage(): IStorage {
		return $this->storage;
	}


	public function getJailedPath($path): ?string {
		$root = rtrim($this->rootPath, '/') . '/';

		if ($path !== $this->rootPath && !str_starts_with($path, $root)) {
			return null;
		} else {
			$path = substr($path, strlen($this->rootPath));
			return trim($path, '/');
		}
	}

	public function getId(): string {
		return parent::getId();
	}

	public function mkdir($path): bool {
		return $this->getWrapperStorage()->mkdir($this->getUnjailedPath($path));
	}

	public function rmdir($path): bool {
		return $this->getWrapperStorage()->rmdir($this->getUnjailedPath($path));
	}

	public function opendir($path) {
		return $this->getWrapperStorage()->opendir($this->getUnjailedPath($path));
	}

	public function is_dir($path): bool {
		return $this->getWrapperStorage()->is_dir($this->getUnjailedPath($path));
	}

	public function is_file($path): bool {
		return $this->getWrapperStorage()->is_file($this->getUnjailedPath($path));
	}

	public function stat($path): array|false {
		return $this->getWrapperStorage()->stat($this->getUnjailedPath($path));
	}

	public function filetype($path): string|false {
		return $this->getWrapperStorage()->filetype($this->getUnjailedPath($path));
	}

	public function filesize($path): int|float|false {
		return $this->getWrapperStorage()->filesize($this->getUnjailedPath($path));
	}

	public function isCreatable($path): bool {
		return $this->getWrapperStorage()->isCreatable($this->getUnjailedPath($path));
	}

	public function isReadable($path): bool {
		return $this->getWrapperStorage()->isReadable($this->getUnjailedPath($path));
	}

	public function isUpdatable($path): bool {
		return $this->getWrapperStorage()->isUpdatable($this->getUnjailedPath($path));
	}

	public function isDeletable($path): bool {
		return $this->getWrapperStorage()->isDeletable($this->getUnjailedPath($path));
	}

	public function isSharable($path): bool {
		return $this->getWrapperStorage()->isSharable($this->getUnjailedPath($path));
	}

	public function getPermissions($path): int {
		return $this->getWrapperStorage()->getPermissions($this->getUnjailedPath($path));
	}

	public function file_exists($path): bool {
		return $this->getWrapperStorage()->file_exists($this->getUnjailedPath($path));
	}

	public function filemtime($path): int|false {
		return $this->getWrapperStorage()->filemtime($this->getUnjailedPath($path));
	}

	public function file_get_contents($path): string|false {
		return $this->getWrapperStorage()->file_get_contents($this->getUnjailedPath($path));
	}

	public function file_put_contents($path, $data): int|float|false {
		return $this->getWrapperStorage()->file_put_contents($this->getUnjailedPath($path), $data);
	}

	public function unlink($path): bool {
		return $this->getWrapperStorage()->unlink($this->getUnjailedPath($path));
	}

	public function rename($source, $target): bool {
		return $this->getWrapperStorage()->rename($this->getUnjailedPath($source), $this->getUnjailedPath($target));
	}

	public function copy($source, $target): bool {
		return $this->getWrapperStorage()->copy($this->getUnjailedPath($source), $this->getUnjailedPath($target));
	}

	public function fopen($path, $mode) {
		return $this->getWrapperStorage()->fopen($this->getUnjailedPath($path), $mode);
	}

	public function getMimeType($path): string|false {
		return $this->getWrapperStorage()->getMimeType($this->getUnjailedPath($path));
	}

	public function hash($type, $path, $raw = false): string|false {
		return $this->getWrapperStorage()->hash($type, $this->getUnjailedPath($path), $raw);
	}

	public function free_space($path): int|float|false {
		return $this->getWrapperStorage()->free_space($this->getUnjailedPath($path));
	}

	public function touch($path, $mtime = null): bool {
		return $this->getWrapperStorage()->touch($this->getUnjailedPath($path), $mtime);
	}

	public function getLocalFile($path): string|false {
		return $this->getWrapperStorage()->getLocalFile($this->getUnjailedPath($path));
	}

	public function hasUpdated($path, $time): bool {
		return $this->getWrapperStorage()->hasUpdated($this->getUnjailedPath($path), $time);
	}

	public function getCache($path = '', $storage = null): ICache {
		$sourceCache = $this->getWrapperStorage()->getCache($this->getUnjailedPath($path));
		return new CacheJail($sourceCache, $this->rootPath);
	}

	public function getOwner($path): string|false {
		return $this->getWrapperStorage()->getOwner($this->getUnjailedPath($path));
	}

	public function getWatcher($path = '', $storage = null): IWatcher {
		$sourceWatcher = $this->getWrapperStorage()->getWatcher($this->getUnjailedPath($path), $this->getWrapperStorage());
		return new JailWatcher($sourceWatcher, $this->rootPath);
	}

	public function getETag($path): string|false {
		return $this->getWrapperStorage()->getETag($this->getUnjailedPath($path));
	}

	public function getMetaData($path): ?array {
		return $this->getWrapperStorage()->getMetaData($this->getUnjailedPath($path));
	}

	public function acquireLock($path, $type, ILockingProvider $provider): void {
		$this->getWrapperStorage()->acquireLock($this->getUnjailedPath($path), $type, $provider);
	}

	public function releaseLock($path, $type, ILockingProvider $provider): void {
		$this->getWrapperStorage()->releaseLock($this->getUnjailedPath($path), $type, $provider);
	}

	public function changeLock($path, $type, ILockingProvider $provider): void {
		$this->getWrapperStorage()->changeLock($this->getUnjailedPath($path), $type, $provider);
	}

	/**
	 * Resolve the path for the source of the share
	 *
	 * @param string $path
	 */
	public function resolvePath($path): array {
		return [$this->getWrapperStorage(), $this->getUnjailedPath($path)];
	}

	public function copyFromStorage(IStorage $sourceStorage, $sourceInternalPath, $targetInternalPath): bool {
		if ($sourceStorage === $this) {
			return $this->copy($sourceInternalPath, $targetInternalPath);
		}
		return $this->getWrapperStorage()->copyFromStorage($sourceStorage, $sourceInternalPath, $this->getUnjailedPath($targetInternalPath));
	}

	public function moveFromStorage(IStorage $sourceStorage, $sourceInternalPath, $targetInternalPath): bool {
		if ($sourceStorage === $this) {
			return $this->rename($sourceInternalPath, $targetInternalPath);
		}
		return $this->getWrapperStorage()->moveFromStorage($sourceStorage, $sourceInternalPath, $this->getUnjailedPath($targetInternalPath));
	}

	public function getPropagator($storage = null): IPropagator {
		if (isset($this->propagator)) {
			return $this->propagator;
		}

		if (!$storage) {
			$storage = $this;
		}
		$this->propagator = new JailPropagator($storage, \OC::$server->getDatabaseConnection());
		return $this->propagator;
	}

	public function writeStream(string $path, $stream, ?int $size = null): int {
		$storage = $this->getWrapperStorage();
		if ($storage->instanceOfStorage(IWriteStreamStorage::class)) {
			/** @var IWriteStreamStorage $storage */
			return $storage->writeStream($this->getUnjailedPath($path), $stream, $size);
		} else {
			$target = $this->fopen($path, 'w');
			[$count, $result] = \OC_Helper::streamCopy($stream, $target);
			fclose($stream);
			fclose($target);
			return $count;
		}
	}

	public function getDirectoryContent($directory): \Traversable|false {
		return $this->getWrapperStorage()->getDirectoryContent($this->getUnjailedPath($directory));
	}
}
