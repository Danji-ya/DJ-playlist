export const getItem = (key: string): string | null => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (err) {
    return '';
  }
};

export const setItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

export const removeState = (key: string): void => {
  localStorage.removeItem(key);
};
