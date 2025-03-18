import { atom } from 'recoil';
import localStorageEffect from '@store/localStorageEffect';
import { IMusic } from '@typings/music';

const LOCAL_STORAGE_KEY = 'dj-playlist';

export const playlistState = atom({
  key: 'playlistState',
  default: [] as IMusic[],
  effects: [localStorageEffect(LOCAL_STORAGE_KEY)],
});
