<?php
/**
 * Copyright (c) 2012 Robin Appelman <icewind@owncloud.com>
 * This file is licensed under the Affero General Public License version 3 or
 * later.
 * See the COPYING-README file.
 */

namespace OC\Files\Cache;

class Upgrade {
	/**
	 * @var Legacy $legacy
	 */
	private $legacy;

	private $numericIds = array();

	private $mimeTypeIds = array();

	/**
	 * @param Legacy $legacy
	 */
	public function __construct($legacy) {
		$this->legacy = $legacy;
	}

	/**
	 * Preform a upgrade a path and it's childs
	 *
	 * @param string $path
	 * @param bool $mode
	 */
	function upgradePath($path, $mode = Scanner::SCAN_RECURSIVE) {
		if (!$this->legacy->hasItems()) {
			return;
		}
		\OC_Hook::emit('\OC\Files\Cache\Upgrade', 'migrate_path', $path);

		if ($row = $this->legacy->get($path)) {
			$data = $this->getNewData($row);
			if ($data) {
				$this->insert($data);
				$this->upgradeChilds($data['id'], $mode);
			}
		}
	}

	/**
	 * upgrade all child elements of an item
	 *
	 * @param int $id
	 * @param bool $mode
	 */
	function upgradeChilds($id, $mode = Scanner::SCAN_RECURSIVE) {
		$children = $this->legacy->getChildren($id);
		foreach ($children as $child) {
			$childData = $this->getNewData($child);
			\OC_Hook::emit('\OC\Files\Cache\Upgrade', 'migrate_path', $child['path']);
			if ($childData) {
				$this->insert($childData);
				if ($mode == Scanner::SCAN_RECURSIVE) {
					$this->upgradeChilds($child['id']);
				}
			}
		}
	}

	/**
	 * insert data into the new cache
	 *
	 * @param array $data the data for the new cache
	 */
	function insert($data) {
		static $insertQuery = null;
		if(is_null($insertQuery)) {
			$insertQuery = \OC_DB::prepare('INSERT INTO `*PREFIX*filecache`
				( `fileid`, `storage`, `path`, `path_hash`, `parent`, `name`, `mimetype`, `mimepart`, `size`, `mtime`, `encrypted`, `etag` )
				VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
		}
		if (!$this->inCache($data['storage'], $data['path_hash'], $data['id'])) {
			$insertQuery->execute(array($data['id'], $data['storage'],
				$data['path'], $data['path_hash'], $data['parent'], $data['name'],
				$data['mimetype'], $data['mimepart'], $data['size'], $data['mtime'], $data['encrypted'], $data['etag']));
		}
	}

	/**
	 * check if an item is already in the new cache
	 *
	 * @param string $storage
	 * @param string $pathHash
	 * @param string $id
	 * @return bool
	 */
	function inCache($storage, $pathHash, $id) {
		static $query = null;
		if(is_null($query)) {
			$query = \OC_DB::prepare('SELECT `fileid` FROM `*PREFIX*filecache` WHERE (`storage` = ? AND `path_hash` = ?) OR `fileid` = ?');
		}
		$result = $query->execute(array($storage, $pathHash, $id));
		return (bool)$result->fetchRow();
	}

	/**
	 * get the new data array from the old one
	 *
	 * @param array $data the data from the old cache
	 * Example data array
	 * Array
	 *	(
	 *		[id] => 418
	 *		[path] => /tina/files/picture.jpg		//relative to datadir
	 *		[path_hash] => 66d4547e372888deed80b24fec9b192b
	 *		[parent] => 234
	 *		[name] => picture.jpg
	 *		[user] => tina
	 *		[size] => 1265283
	 *		[ctime] => 1363909709
	 *		[mtime] => 1363909709
	 *		[mimetype] => image/jpeg
	 *		[mimepart] => image
	 *		[encrypted] => 0
	 *		[versioned] => 0
	 *		[writable] => 1
	 *	)
	 *
	 * @return array
	 */
	function getNewData($data) {
		$newData = $data;
		/**
		 * @var \OC\Files\Storage\Storage $storage
		 * @var string $internalPath;
		 */
		list($storage, $internalPath) = \OC\Files\Filesystem::resolvePath($data['path']);
		if ($storage) {
			$newData['path_hash'] = md5($internalPath);
			$newData['path'] = $internalPath;
			$newData['storage'] = $this->getNumericId($storage);
			$newData['parent'] = ($internalPath === '') ? -1 : $data['parent'];
			$newData['permissions'] = ($data['writable']) ? \OCP\PERMISSION_ALL : \OCP\PERMISSION_READ;
			$newData['storage_object'] = $storage;
			$newData['mimetype'] = $this->getMimetypeId($newData['mimetype'], $storage);
			$newData['mimepart'] = $this->getMimetypeId($newData['mimepart'], $storage);
			$newData['etag'] = $this->getETag($data['path'], $data['user'], $internalPath, $storage);
			return $newData;
		} else {
			\OC_Log::write('core', 'Unable to migrate data from old cache for '.$data['path'].' because the storage was not found', \OC_Log::ERROR);
			return false;
		}
	}

	/**
	 * get a file`s E-Tag
	 *
	 * @param string $legacyPath in the form of a legacy path
	 * @param string $user the user ID the file referred to in path belongs to
	 * @param string $internalPath
	 * @param \OC\Files\Storage\Storage $storage
	 * @return string Etag
	 */
	function getETag($legacyPath, $user, $internalPath, $storage) {
		static $queryGetETag = null;
		static $queryCleanUp = null;

		//the path in the database is stored wo /$user/files
		//we need to strip it off, care is taken if user == files
		$offset = strpos($legacyPath,  '/files/', 2) + 6;
		$legacyPath = substr($legacyPath, $offset);

		//Look for the E-Tag in the old database
		if(is_null($queryGetETag)) {
			$queryGetETag = \OC_DB::prepare('
				SELECT `propertyvalue`
				FROM `*PREFIX*properties`
				WHERE `propertyname` = \'{DAV:}getetag\'
					AND `propertypath` = ?
					AND `userid` = ?
				LIMIT 1');
		}
		$result = $queryGetETag->execute(array($legacyPath, $user));
		$etag = $result->fetchOne();

		if($etag) {
			if(is_null($queryCleanUp)) {
				$queryCleanUp = \OC_DB::prepare('
					DELETE FROM `*PREFIX*properties`
					WHERE `propertyname` = \'{DAV:}getetag\'
						AND `propertypath` = ?
						AND `userid` = ?
					LIMIT 1
					');
			}

			//On success: remove the old DB entry and return the value
			$queryCleanUp->execute(array($legacyPath, $user));
			return $etag;
		}

		//No etag detected, determine it with new methods
		return $storage->getETag($internalPath);
	}

	/**
	 * get the numeric storage id
	 *
	 * @param \OC\Files\Storage\Storage $storage
	 * @return int
	 */
	function getNumericId($storage) {
		$storageId = $storage->getId();
		if (!isset($this->numericIds[$storageId])) {
			$cache = $storage->getCache();
			$this->numericIds[$storageId] = $cache->getNumericStorageId();
		}
		return $this->numericIds[$storageId];
	}

	/**
	 * get the numeric id for a mimetype
	 *
	 * @param string $mimetype
	 * @param \OC\Files\Storage\Storage $storage
	 * @return int
	 */
	function getMimetypeId($mimetype, $storage) {
		if (!isset($this->mimeTypeIds[$mimetype])) {
			$cache = new Cache($storage);
			$this->mimeTypeIds[$mimetype] = $cache->getMimetypeId($mimetype);
		}
		return $this->mimeTypeIds[$mimetype];
	}

	/**
	 * check if a cache upgrade is required for $user
	 *
	 * @param string $user
	 * @return bool
	 */
	static function needUpgrade($user) {
		$cacheVersion = (int)\OCP\Config::getUserValue($user, 'files', 'cache_version', 4);
		return $cacheVersion < 5;
	}

	/**
	 * mark the filecache as upgrade
	 *
	 * @param string $user
	 */
	static function upgradeDone($user) {
		\OCP\Config::setUserValue($user, 'files', 'cache_version', 5);
	}
}
