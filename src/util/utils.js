import { getItem, setItem } from './localstorage';

// eslint-disable-next-line import/prefer-default-export
export const getInitTheme = () => {
  const theme = getItem('theme');

  if (theme === null) {
    setItem('theme', true);
    return true;
  }

  return theme;
};
