import { atom } from 'recoil';
import { IToastState } from '../@types/toast';

export const toastState = atom({
  key: 'toastState',
  default: [] as IToastState[],
});
