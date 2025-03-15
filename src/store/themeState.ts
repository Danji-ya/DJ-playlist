import { atom } from 'recoil';
import localStorageEffect from '@store/localStorageEffect';
import { ThemeState } from '@typings/theme';

const LOCAL_STORAGE_KEY = 'dj-theme';

const initialState: ThemeState = {
  userTheme: 'default',
  systemTheme: 'no-preference',
};

export const themeState = atom({
  key: 'themeState',
  default: initialState,
  effects: [localStorageEffect(LOCAL_STORAGE_KEY)],
});
