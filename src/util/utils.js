import { getItem, setItem } from './localstorage';

export const getInitTheme = () => {
  const theme = getItem('theme');

  if (theme === null) {
    setItem('theme', true);
    return true;
  }

  return theme;
};

export const padding = value => `00${value}`.slice(-2);

export const formatTime = time => {
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);

  return `${padding(hour)}:${padding(min)}:${padding(sec)}`;
};
