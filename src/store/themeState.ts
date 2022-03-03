/* eslint-disable @typescript-eslint/no-unused-expressions */
import { atom } from 'recoil';
import { getItem, removeState, setItem } from '../utils/localstorage';

const KEY = 'theme';

const localStorageEffect =
  <T>(key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = getItem(key);

    // Callbacks to set or reset the value of the atom.
    if (savedValue != null) {
      setSelf(savedValue);
    }

    // Subscribe to changes in the atom value.
    onSet((newValue: T, _: any, isReset: boolean): void => {
      isReset ? removeState(key) : setItem(key, newValue);
    });
  };

export const themeState = atom({
  key: 'themeState',
  default: true,
  effects: [localStorageEffect(KEY)],
});
