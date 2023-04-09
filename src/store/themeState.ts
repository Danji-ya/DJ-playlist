import { atom } from 'recoil';
import localStorageEffect from './localStorageEffect';
import { ThemeState } from '../@types/theme';

const KEY = 'dj-theme';

const initialState: ThemeState = {
  userTheme: 'default',
  systemTheme: 'no-preference',
};

export const themeState = atom({
  key: 'themeState',
  default: initialState,
  effects: [localStorageEffect(KEY)],
});
