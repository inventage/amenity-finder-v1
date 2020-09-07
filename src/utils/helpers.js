export const formatDistance = (distance, fractionDigits = 2, locale = 'de-CH') => {
  const normalizedDistance = parseInt(`${distance}`, 10);
  if (Number.isNaN(normalizedDistance)) {
    return distance;
  }

  const isKm = normalizedDistance >= 1000;
  const formatter = new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: isKm ? 'kilometer' : 'meter', // https://tc39.es/ecma402/#table-sanctioned-simple-unit-identifiers
    unitDisplay: 'narrow',
    maximumFractionDigits: fractionDigits,
  });

  return formatter.format(isKm ? normalizedDistance / 1000 : normalizedDistance);
};

/**
 * A function resolving a promise after a given time.
 * This can be used in async functions to delay execution:
 *
 * async func() {
 *   await delay(1000);
 *   …
 * }
 *
 * @param time
 * @returns {Promise<void>}
 */
export const delay = time => new Promise(r => setTimeout(r, time));
