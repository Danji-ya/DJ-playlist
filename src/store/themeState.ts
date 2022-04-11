import { atom } from 'recoil';
import localStorageEffect from './localStorageEffect';

const KEY = 'theme';

export const themeState = atom({
  key: 'themeState',
  default: true,
  effects: [localStorageEffect(KEY)],
});
