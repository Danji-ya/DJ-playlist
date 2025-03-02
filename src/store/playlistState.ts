import { atom } from 'recoil';
import localStorageEffect from '@store/localStorageEffect';
import { IMusic } from '../@types/music';

const KEY = 'djplaylist';

export const playlistState = atom({
  key: 'playlistState',
  default: [] as IMusic[],
  effects: [localStorageEffect(KEY)],
});
