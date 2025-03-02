import { atom } from 'recoil';
import { IToastState } from '@typings/toast';

export const toastState = atom({
  key: 'toastState',
  default: [] as IToastState[],
});
