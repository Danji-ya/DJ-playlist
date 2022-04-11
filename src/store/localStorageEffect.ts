/* eslint-disable @typescript-eslint/no-unused-expressions */
import { getItem, removeState, setItem } from '../utils/localstorage';

const localStorageEffect =
  <T>(key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = getItem(key);

    if (savedValue != null) {
      setSelf(savedValue);
    }

    onSet((newValue: T, _: any, isReset: boolean): void => {
      isReset ? removeState(key) : setItem(key, newValue);
    });
  };

export default localStorageEffect;
