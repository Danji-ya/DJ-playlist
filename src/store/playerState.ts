import { atom } from 'recoil';
import { Music } from '@typings/music';

export const playerState = atom({
  key: 'playerState',
  default: {
    selectedMusic: {} as Music,
    volume: 0.5,
    shuffle: false,
  },
});
