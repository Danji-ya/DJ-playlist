import { atom } from 'recoil';
import localStorageEffect from '@store/localStorageEffect';

const LOCAL_STORAGE_KEY = 'dj-search_history';

export const searchHistoryState = atom<string[]>({
  key: 'searchHistoryState',
  default: [],
  effects: [localStorageEffect(LOCAL_STORAGE_KEY)],
});
