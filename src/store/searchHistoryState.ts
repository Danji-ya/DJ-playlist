import { atom } from 'recoil';
import localStorageEffect from '@store/localStorageEffect';

const KEY = 'searchHistory';

export const searchHistoryState = atom<string[]>({
  key: 'searchHistoryState',
  default: [],
  effects: [localStorageEffect(KEY)],
});
