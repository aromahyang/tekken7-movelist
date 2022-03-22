export const CHARACTER_INDEX_COOKIE = 'tk7-character-index';
export const LANGUAGE_INDEX_COOKIE = 'tk7-language-index';

/**
 * 
 * @param {string} name 
 * @param {string} type 
 * @returns 
 */
export function getCookie(name, type) {
  const value = `; ${document.cookie}`;
  const chunks = value.split(`; ${name}=`);
  if (chunks.length === 2) {
    const result = chunks.pop().split(';').shift();
    return type === 'number' ? +result : result;
  } else {
    return undefined;
  }
}

/**
 * 
 * @param {string} name 
 * @param {any} value 
 */
export function setCookie(name, value) {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
}
