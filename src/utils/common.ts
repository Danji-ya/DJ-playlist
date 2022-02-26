import { getItem, setItem } from './localstorage';

export const getInitTheme = () => {
  const theme = getItem('theme');

  if (theme === null || theme === undefined) {
    setItem('theme', true);
    return true;
  }

  return theme;
};

export const getInitDjplaylist = () => {
  const djplaylist = getItem('djplaylist');

  if (djplaylist === null) {
    setItem('djplaylist', []);
    return [];
  }

  return djplaylist;
};
export const padding = (value: number) => `00${value}`.slice(-2);

export const formatTime = (time: number) => {
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);

  return `${padding(hour)}:${padding(min)}:${padding(sec)}`;
};

export const restructuring = (music: any) => {
  const {
    id: { videoId },
    snippet: {
      title,
      channelTitle,
      thumbnails: {
        high: { url },
      },
    },
  } = music;

  const subtitle = channelTitle;

  return { videoId, title, subtitle, url };
};
