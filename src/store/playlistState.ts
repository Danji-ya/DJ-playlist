import { atom } from 'recoil';
import { IMusic } from '../@types/music';
import localStorageEffect from './localStorageEffect';

const KEY = 'djplaylist';

export const playlistState = atom({
  key: 'playlistState',
  default: [] as IMusic[],
  effects: [localStorageEffect(KEY)],
});
