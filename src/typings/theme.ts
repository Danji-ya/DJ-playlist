export type DarkLight = 'dark' | 'light';

export interface ThemeState {
  userTheme: DarkLight | 'default';
  systemTheme: DarkLight | 'no-preference';
}
