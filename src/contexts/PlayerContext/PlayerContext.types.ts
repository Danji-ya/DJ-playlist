import { ReactNode } from 'react';
import Youtube from '@components/Youtube';
import { Music } from '@typings/music';

export type MusicChangeHandler = (params: {
  music: Music;
  isNext?: boolean;
}) => void;

export type MusicVolumeChangeHandler = (params: {
  value: string;
  isTurnOff?: boolean;
}) => void;

export type MusicProgressChangeHandler = (target: HTMLInputElement) => void;

export type MusicToggleShuffleHandler = () => void;

export type MusicToggleStateHandler = () => void;

export type MusicMouseStateChangeHandler = (isDown?: boolean) => void;

export type MusicOnStateChangeHandler = (e: YT.OnStateChangeEvent) => void;

export interface PlayerContextValue {
  playerRef: React.RefObject<Youtube>;
  playerState: {
    currentTime: number;
    duration: number;
    volume: number;
    muted: boolean;
    paused: boolean;
    selectedMusic: Music;
    shuffle: boolean;
  };
  playerControls: {
    onStateChange: MusicOnStateChangeHandler;
    onMouseStateChange: MusicMouseStateChangeHandler;
    onToggleState: MusicToggleStateHandler;
    onVolumeChange: MusicVolumeChangeHandler;
    onProgressChange: MusicProgressChangeHandler;
    onMusicChange: MusicChangeHandler;
    onToggleShuffle: MusicToggleShuffleHandler;
  };
}

export interface PlayerProviderProps {
  children: ReactNode;
}
