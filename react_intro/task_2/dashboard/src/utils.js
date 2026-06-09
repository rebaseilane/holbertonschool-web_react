/**
 * utils.js
 * -------------------------
 * Utility functions used throughout the dashboard.
 */

/**
 * Returns the current year.
 *
 * @returns {number} Current year
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Returns the footer text.
 *
 * @param {boolean} isIndex
 * @returns {string} Footer text
 */
export function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  }

  return "Holberton School main dashboard";
}

/**
 * Returns latest notification message (HTML string).
 *
 * @returns {string}
 */
export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}