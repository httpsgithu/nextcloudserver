<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\DAV\Events;

use OCP\EventDispatcher\Event;

/**
 * Class CalendarUpdatedEvent
 *
 * @package OCA\DAV\Events
 * @since 20.0.0
 */
class CalendarUpdatedEvent extends Event {

	/**
	 * CalendarUpdatedEvent constructor.
	 *
	 * @param int $calendarId
	 * @param array $calendarData
	 * @param array $shares
	 * @param array $mutations
	 * @since 20.0.0
	 */
	public function __construct(
		private int $calendarId,
		private array $calendarData,
		private array $shares,
		private array $mutations,
	) {
		parent::__construct();
	}

	/**
	 * @return int
	 * @since 20.0.0
	 */
	public function getCalendarId(): int {
		return $this->calendarId;
	}

	/**
	 * @return array
	 * @since 20.0.0
	 */
	public function getCalendarData(): array {
		return $this->calendarData;
	}

	/**
	 * @return array
	 * @since 20.0.0
	 */
	public function getShares(): array {
		return $this->shares;
	}

	/**
	 * @return array
	 * @since 20.0.0
	 */
	public function getMutations(): array {
		return $this->mutations;
	}
}
