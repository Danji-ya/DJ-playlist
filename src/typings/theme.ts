import { THEME_MODE } from '@constants/theme';

export type DarkLight = typeof THEME_MODE.LIGHT | typeof THEME_MODE.DARK;
export type UserTheme = DarkLight | typeof THEME_MODE.DEFAULT;
export type SystemTheme = DarkLight | typeof THEME_MODE.NO_PREFERENCE;

export interface ThemeState {
  userTheme: UserTheme;
  systemTheme: SystemTheme;
}
