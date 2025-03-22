import { atom } from 'recoil';
import { ToastState } from '@typings/toast';

export const toastState = atom({
  key: 'toastState',
  default: [] as ToastState[],
});
