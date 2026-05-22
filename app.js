/* ============================================================
   Viandas StackLab — Etapa 1: Esqueleto
   Shared vanilla JavaScript: localStorage I/O, state management,
   user simulation, reset, deadline, notifications, traffic-light
   Zero dependencies · Zero build step
   ============================================================ */

;(function () {
  'use strict';

  /* --------------------------------------------------------
     Constants
     -------------------------------------------------------- */

  var STORAGE_PREFIX = 'viandas_';

  var KEYS = {
    USER: STORAGE_PREFIX + 'user',
    CONFIRMATIONS: STORAGE_PREFIX + 'confirmations',
    DEADLINE_SIMULATED: STORAGE_PREFIX + 'deadline_simulated',
    BANNER_DISMISSED: STORAGE_PREFIX + 'banner_dismissed',
    SIMULATED_USER: STORAGE_PREFIX + 'simulated_user'
  };

  var EMPLOYEES = [
    'Martín Fernández',
    'Diego López',
    'Sofía Martínez',
    'Ana García',
    'Carlos Ruiz'
  ];

  var DAY_NAMES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  /* --------------------------------------------------------
     localStorage Helpers (with graceful degradation)
     -------------------------------------------------------- */

  function storageAvailable() {
    try {
      var test = '__viandas_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  var HAS_STORAGE = storageAvailable();

  function getItem(key) {
    if (!HAS_STORAGE) return null;
    try {
      var raw = localStorage.getItem(key);
      if (raw === null) return null;
      return JSON.parse(raw);
    } catch (e) {
      console.warn('[Viandas] Failed to parse localStorage key "' + key + '":', e);
      return null;
    }
  }

  function setItem(key, value) {
    if (!HAS_STORAGE) {
      console.warn('[Viandas] localStorage unavailable — data not persisted');
      return false;
    }
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('[Viandas] Failed to write localStorage key "' + key + '":', e);
      return false;
    }
  }

  function removeItem(key) {
    if (!HAS_STORAGE) return;
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('[Viandas] Failed to remove localStorage key "' + key + '":', e);
    }
  }

  /* --------------------------------------------------------
     Reset — clear all viandas keys and reload
     -------------------------------------------------------- */

  function resetAll() {
    if (!HAS_STORAGE) {
      window.location.reload();
      return;
    }
    try {
      Object.values(KEYS).forEach(function (key) {
        localStorage.removeItem(key);
      });
    } catch (e) {
      console.warn('[Viandas] Reset failed:', e);
    }
    // Remove ?reset=1 and reload clean
    var url = new URL(window.location.href);
    url.searchParams.delete('reset');
    window.location.href = url.toString();
  }

  function handleResetParam() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('reset') === '1') {
      resetAll();
      return true; // page will reload
    }
    return false;
  }

  /* --------------------------------------------------------
     Per-user storage helpers
     -------------------------------------------------------- */

  /**
    * Get a user-specific key (prefix with simulated user name).
    * Falls back to base key if no simulated user.
    * @param {string} baseKey
    * @returns {string}
    */
  function getUserKey(baseKey) {
    var simUser = getSimulatedUser();
    if (!simUser) return baseKey;
    return baseKey + '_' + simUser.replace(/\s+/g, '_');
  }

  /* --------------------------------------------------------
     State Management
     -------------------------------------------------------- */

  /**
    * Get current user config.
    * @returns {{ name: string, attendance: boolean[] } | null}
    */
  function getCurrentUser() {
    return getItem(getUserKey(KEYS.USER));
  }

  /**
    * Save user config.
    * @param {{ name: string, attendance: boolean[] }} user
    */
  function saveUser(user) {
    return setItem(getUserKey(KEYS.USER), user);
  }

  /**
    * Get all confirmations for the current user.
    * @returns {{ [date: string]: { confirmed: boolean, timestamp: string, late: boolean } }}
    */
  function getConfirmations() {
    return getItem(getUserKey(KEYS.CONFIRMATIONS)) || {};
  }

  /**
    * Save a confirmation for a specific date.
    * @param {string} date - ISO date (e.g. "2026-05-12")
    * @param {{ confirmed: boolean, timestamp: string, late: boolean }} data
    */
  function saveConfirmation(date, data) {
    var confirmations = getConfirmations();
    confirmations[date] = data;
    return setItem(getUserKey(KEYS.CONFIRMATIONS), confirmations);
  }

  /**
    * Remove a confirmation for a specific date.
    * @param {string} date - ISO date
    */
  function removeConfirmation(date) {
    var confirmations = getConfirmations();
    delete confirmations[date];
    return setItem(getUserKey(KEYS.CONFIRMATIONS), confirmations);
  }

  /**
    * Get user config for a specific employee by name.
    * @param {string} name - Employee name
    * @returns {{ name: string, attendance: boolean[] } | null}
    */
  function getUserByName(name) {
    if (!name) return null;
    var key = KEYS.USER + '_' + name.replace(/\s+/g, '_');
    return getItem(key);
  }

  /**
    * Get confirmations for a specific employee by name.
    * @param {string} name - Employee name
    * @returns {{ [date: string]: { confirmed: boolean, timestamp: string, late: boolean, dishIndex: number } }}
    */
  function getConfirmationsByName(name) {
    if (!name) return {};
    var key = KEYS.CONFIRMATIONS + '_' + name.replace(/\s+/g, '_');
    return getItem(key) || {};
  }

  /**
   * Check if deadline is currently simulated as passed.
   * @returns {boolean}
   */
  function isDeadlineSimulated() {
    return getItem(KEYS.DEADLINE_SIMULATED) === true;
  }

  /**
   * Set the deadline simulated flag.
   * @param {boolean} value
   */
  function setDeadlineSimulated(value) {
    return setItem(KEYS.DEADLINE_SIMULATED, value);
  }

  /**
   * Toggle the deadline simulated flag and return the new value.
   * @returns {boolean}
   */
  function toggleDeadlineSimulated() {
    var current = isDeadlineSimulated();
    setDeadlineSimulated(!current);
    return !current;
  }

  /* --------------------------------------------------------
     Traffic-Light Status
     -------------------------------------------------------- */

  /**
   * Get the traffic-light CSS class for a given date.
   * @param {string} date - ISO date
   * @param {boolean} isDeadline - whether deadline is passed
   * @returns {string} CSS class: 'status-ok' | 'status-late' | 'status-missing'
   */
  function getStatusClass(date, isDeadline) {
    var confirmations = getConfirmations();
    var entry = confirmations[date];

    if (!entry || !entry.confirmed) {
      return 'status-missing';
    }
    if (entry.late || isDeadline) {
      return 'status-late';
    }
    return 'status-ok';
  }

  /**
   * Get a human-readable status label for accessibility.
   * @param {string} date - ISO date
   * @param {boolean} isDeadline
   * @returns {string}
   */
  function getStatusLabel(date, isDeadline) {
    var confirmations = getConfirmations();
    var entry = confirmations[date];

    if (!entry || !entry.confirmed) {
      return 'Sin confirmar';
    }
    if (entry.late || isDeadline) {
      return 'Confirmado tarde';
    }
    return 'Confirmado a tiempo';
  }

  /* --------------------------------------------------------
     Date Helpers
     -------------------------------------------------------- */

  /**
   * Format an ISO date string for display.
   * @param {string} isoDate - e.g. "2026-05-12"
   * @returns {string} e.g. "Lunes 12/05"
   */
  function formatDateLabel(isoDate) {
    var parts = isoDate.split('-');
    if (parts.length !== 3) return isoDate;
    var dateObj = new Date(isoDate + 'T12:00:00');
    var dayIndex = dateObj.getDay(); // 0=Sun, 1=Mon, ... 6=Sat
    // Map JS day index to our weekday names (Mon=0..Fri=4)
    var jsToOur = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };
    var dayName = DAY_NAMES[jsToOur[dayIndex]] || '';
    return dayName + ' ' + parts[2] + '/' + parts[1];
  }

  /**
   * Get the weekday name for an ISO date.
   * @param {string} isoDate
   * @returns {string}
   */
  function getWeekdayName(isoDate) {
    var dateObj = new Date(isoDate + 'T12:00:00');
    var jsToOur = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };
    var dayIndex = dateObj.getDay();
    return DAY_NAMES[jsToOur[dayIndex]] || isoDate;
  }

  /**
   * Get the day index (0=Mon .. 4=Fri) from an ISO date.
   * @param {string} isoDate
   * @returns {number}
   */
  function getDayIndex(isoDate) {
    var dateObj = new Date(isoDate + 'T12:00:00');
    var jsToOur = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };
    return jsToOur[dateObj.getDay()] !== undefined ? jsToOur[dateObj.getDay()] : -1;
  }

  /**
   * Build an ISO timestamp for right now.
   * @returns {string}
   */
  function nowISO() {
    return new Date().toISOString();
  }

  /* --------------------------------------------------------
     Confirmation Builder
     -------------------------------------------------------- */

  /**
   * Build a confirmation data object for saving.
   * @param {{ late?: boolean }} options
   * @returns {{ confirmed: boolean, timestamp: string, late: boolean }}
   */
  function buildConfirmation(options) {
    var opts = options || {};
    return {
      confirmed: true,
      timestamp: nowISO(),
      late: opts.late === true || isDeadlineSimulated(),
      dishIndex: typeof opts.dishIndex === 'number' ? opts.dishIndex : null
    };
  }

  /**
   * Check if a date is already confirmed.
   * @param {string} date - ISO date
   * @returns {boolean}
   */
  function isConfirmed(date) {
    var confirmations = getConfirmations();
    var entry = confirmations[date];
    return !!(entry && entry.confirmed);
  }

  /* --------------------------------------------------------
     User Simulation Dropdown
     -------------------------------------------------------- */

  /**
   * Get the currently simulated user name.
   * @returns {string|null}
   */
  function getSimulatedUser() {
    return getItem(KEYS.SIMULATED_USER);
  }

  /**
   * Set the simulated user name.
   * @param {string} name
   */
  function setSimulatedUser(name) {
    return setItem(KEYS.SIMULATED_USER, name);
  }

  /**
   * Initialize the user simulation dropdown in a container.
   * Also checks ?user= URL param on first load as a fallback.
   *
   * @param {string|HTMLElement} container - selector or element to inject the dropdown into
   * @param {{ onChange?: function(string) }} options
   * @returns {HTMLSelectElement|null}
   */
  function initUserSimulation(container, options) {
    var opts = options || {};
    var el = typeof container === 'string'
      ? document.querySelector(container)
      : container;

    if (!el) {
      console.warn('[Viandas] User simulation container not found:', container);
      return null;
    }

    // Check ?user= on first load (only if not already set in localStorage)
    var currentSimulated = getSimulatedUser();
    if (!currentSimulated) {
      var params = new URLSearchParams(window.location.search);
      var urlUser = params.get('user');
      if (urlUser) {
        setSimulatedUser(urlUser);
        currentSimulated = urlUser;
      }
    }

    // Build dropdown
    var wrapper = document.createElement('span');
    wrapper.className = 'user-sim';

    var select = document.createElement('select');
    select.setAttribute('aria-label', 'Simular empleado');

    // Empty default option
    var defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = '👤 Simular...';
    if (!currentSimulated) {
      defaultOpt.selected = true;
    }
    select.appendChild(defaultOpt);

    // Employee options
    EMPLOYEES.forEach(function (name) {
      var option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      if (name === currentSimulated) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    // Change handler
    select.addEventListener('change', function () {
      var chosen = select.value;
      if (chosen) {
        setSimulatedUser(chosen);
      } else {
        removeItem(KEYS.SIMULATED_USER);
      }
      if (typeof opts.onChange === 'function') {
        opts.onChange(chosen || null);
      }
    });

    wrapper.appendChild(select);
    el.appendChild(wrapper);

    return select;
  }

  /* --------------------------------------------------------
     Notification Banner
     -------------------------------------------------------- */

  /**
   * Check if the notification banner has been dismissed.
   * @returns {boolean}
   */
  function isBannerDismissed() {
    return getItem(KEYS.BANNER_DISMISSED) === true;
  }

  /**
   * Dismiss the notification banner (persist across pages).
   */
  function dismissBanner() {
    setItem(KEYS.BANNER_DISMISSED, true);
  }

  /**
   * Show the notification banner again (undo dismiss).
   */
  function resetBanner() {
    removeItem(KEYS.BANNER_DISMISSED);
  }

  /**
   * Initialize the notification banner in a given container.
   * Creates the banner HTML if it should be visible.
   *
   * @param {string|HTMLElement} container - where to prepend the banner
   * @returns {HTMLElement|null}
   */
  function initNotificationBanner(container) {
    var el = typeof container === 'string'
      ? document.querySelector(container)
      : container;

    if (!el) return null;

    if (isBannerDismissed()) return null;

    var banner = document.createElement('div');
    banner.className = 'notification-banner';
    banner.setAttribute('role', 'alert');
    banner.setAttribute('aria-label', 'Recordatorio de vianda');

    banner.innerHTML =
      '<span class="notification-banner__icon" aria-hidden="true">📬</span>' +
      '<span class="notification-banner__text">' +
      'Recordatorio: Tenés hasta el <strong>jueves 10 AM</strong> para confirmar tu vianda (simulación Gmail/Google Chat)' +
      '</span>' +
      '<button class="notification-banner__dismiss" aria-label="Cerrar recordatorio" type="button">Entendido</button>';

    // Dismiss handler
    var dismissBtn = banner.querySelector('.notification-banner__dismiss');
    dismissBtn.addEventListener('click', function () {
      dismissBanner();
      banner.remove();
    });

    // Insert at the top of the container
    el.insertBefore(banner, el.firstChild);

    return banner;
  }

  /* --------------------------------------------------------
     Deadline Simulation UI
     -------------------------------------------------------- */

  /**
   * Initialize a deadline simulator toggle button.
   * @param {string|HTMLElement} container
   * @param {{ onToggle?: function(boolean) }} options
   * @returns {HTMLButtonElement|null}
   */
  function initDeadlineButton(container, options) {
    var opts = options || {};
    var el = typeof container === 'string'
      ? document.querySelector(container)
      : container;

    if (!el) return null;

    var active = isDeadlineSimulated();

    var btn = document.createElement('button');
    btn.className = 'btn btn--warning btn--sm';
    btn.type = 'button';
    updateDeadlineButton(btn, active);

    btn.addEventListener('click', function () {
      var newState = toggleDeadlineSimulated();
      updateDeadlineButton(btn, newState);
      if (typeof opts.onToggle === 'function') {
        opts.onToggle(newState);
      }
    });

    el.appendChild(btn);
    return btn;
  }

  function updateDeadlineButton(btn, active) {
    if (active) {
      btn.textContent = '⏰ Simulación activa (jueves 10 AM)';
      btn.className = 'btn btn--danger btn--sm';
    } else {
      btn.textContent = '⏰ Simular jueves 10 AM';
      btn.className = 'btn btn--warning btn--sm';
    }
  }

  /* --------------------------------------------------------
     Initialization
     -------------------------------------------------------- */

  /**
   * Run on every page load. Handles ?reset=1 and sets up
   * global state awareness.
   */
  function init() {
    if (handleResetParam()) {
      // Page is reloading — bail out
      return;
    }

    if (!HAS_STORAGE) {
      console.warn('[Viandas] localStorage no disponible. Usando datos demo.');
    }
  }

  /* --------------------------------------------------------
     Public API
     -------------------------------------------------------- */

  window.ViandasApp = {
    // Storage
    storageAvailable: storageAvailable,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,

    // Reset
    resetAll: resetAll,

    // State
    getCurrentUser: getCurrentUser,
    saveUser: saveUser,
    getConfirmations: getConfirmations,
    saveConfirmation: saveConfirmation,
    removeConfirmation: removeConfirmation,
    getUserByName: getUserByName,
    getConfirmationsByName: getConfirmationsByName,
    isDeadlineSimulated: isDeadlineSimulated,
    setDeadlineSimulated: setDeadlineSimulated,
    toggleDeadlineSimulated: toggleDeadlineSimulated,

    // Traffic-light
    getStatusClass: getStatusClass,
    getStatusLabel: getStatusLabel,

    // Dates
    formatDateLabel: formatDateLabel,
    getWeekdayName: getWeekdayName,
    getDayIndex: getDayIndex,
    nowISO: nowISO,

    // Confirmations
    buildConfirmation: buildConfirmation,
    isConfirmed: isConfirmed,

    // User simulation
    getSimulatedUser: getSimulatedUser,
    setSimulatedUser: setSimulatedUser,
    initUserSimulation: initUserSimulation,
    getUserKey: getUserKey,
    EMPLOYEES: EMPLOYEES,

    // Banner
    isBannerDismissed: isBannerDismissed,
    dismissBanner: dismissBanner,
    resetBanner: resetBanner,
    initNotificationBanner: initNotificationBanner,

    // Deadline button
    initDeadlineButton: initDeadlineButton,

    // Day names
    DAY_NAMES: DAY_NAMES,

    // Init
    init: init,

    // Keys (read-only, for debugging)
    KEYS: KEYS
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
