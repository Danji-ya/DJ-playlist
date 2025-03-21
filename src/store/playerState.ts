import { atom } from 'recoil';
import { IMusic } from '@typings/music';

export const playerState = atom({
  key: 'playerState',
  default: {
    selectedMusic: {} as IMusic,
    volume: 0.5,
    shuffle: false,
  },
});
