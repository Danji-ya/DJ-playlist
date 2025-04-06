import { atom } from 'recoil';
import localStorageEffect from '@store/localStorageEffect';
import { Music } from '@typings/music';

const LOCAL_STORAGE_KEY = 'dj-playlist';

export const playlistState = atom<Music[]>({
  key: 'playlistState',
  default: [],
  effects: [localStorageEffect(LOCAL_STORAGE_KEY)],
});
