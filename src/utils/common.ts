/* eslint-disable eqeqeq */
/* eslint-disable no-bitwise */
import { IMusic } from '../@types/music';
import { getItem, setItem } from './localstorage';

export const getInitTheme = () => {
  const theme = getItem('theme');

  if (theme === null || theme === undefined) {
    setItem('theme', true);
    return true;
  }

  return !!theme;
};

export const getInitDjplaylist = () => {
  const djplaylist = getItem('djplaylist');

  if (djplaylist === null) {
    setItem('djplaylist', []);
    return [] as IMusic[];
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

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const customSearchHistory = (newItem: string, list: string[]) => {
  const newList = [...new Set([newItem, ...list])];

  return newList.slice(0, 5);
};

export const debounce = (callback: () => void, waitTime = 500) => {
  let timer: NodeJS.Timeout;

  return () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, waitTime);
  };
};

export const thorttle = (callback: () => void, waitTime = 1000) => {
  let timer: NodeJS.Timeout | null;

  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, waitTime);
    }
  };
};
