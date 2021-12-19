export const CHARACTER_INDEX_COOKIE = 'tk7-character-index';
export const LANGUAGE_INDEX_COOKIE = 'tk7-language-index';

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const chunks = value.split(`; ${name}=`);
  if (chunks.length === 2) {
    return +(chunks.pop().split(';').shift());
  } else {
    return undefined;
  }
}

export function saveCookie(name, value) {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
}
