/**
 * Checks to see if val conatins a valid value or not.
 * i.e. val = 0 returns false, val = undefined returns true, val = null returns true, val = '' returns true, and val = true | false returns false.
 * @param val Value to check.
 */
export const isNothing = (val: any): boolean => !val && val !== 0 && val !== false;

/**
 * Checks to see if val conatins a valid value or not.
 * i.e. val = 0 returns true, val = undefined returns false, val = null returns false, val = '' returns false, and val = true | false returns true.
 * @param val Value to check.
 */
export const isSomething = (val: any): boolean => !isNothing(val);

/**
 * Checks to see if val is blank.
 * @param val Value to check.
 */
export const isEmpty = (val: any): boolean =>
    Array.isArray(val) ? val.length === 0 : typeof val === 'object' ? Object.keys(val).length === 0 : isNothing(val);
