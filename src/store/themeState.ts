import { atom } from 'recoil';
import localStorageEffect from '@store/localStorageEffect';
import { ThemeState } from '@typings/theme';
import { THEME_MODE } from '@constants/theme';

const LOCAL_STORAGE_KEY = 'dj-theme';

const initialState: ThemeState = {
  userTheme: THEME_MODE.DEFAULT,
  systemTheme: THEME_MODE.NO_PREFERENCE,
};

export const themeState = atom({
  key: 'themeState',
  default: initialState,
  effects: [localStorageEffect(LOCAL_STORAGE_KEY)],
});
