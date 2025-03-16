import { forwardRef, LegacyRef } from 'react';
import { isEmptyObj } from '@utils/common';
import Youtube from '@components/Youtube';
import { H2A11Y } from '@styles/common';
import { IMusic, IMusicChange, IMusicVolume } from '@typings/music';
import Profile from './Profile';
import Progress from './Progress';
import Styled from './Player.style';
import Controls from './Controls';
import Sound from './Sound';
import Dibs from './Dibs';

interface Props {
  playerProps: {
    currentTime: number;
    duration: number;
    volume: number;
    muted: boolean;
    paused: boolean;
  };
  dibs: boolean;
  shuffle: boolean;
  selectedMusic: IMusic;
  onToggleDibs: (music: IMusic) => void;
  onStateChange: (e: YT.OnStateChangeEvent) => void;
  onMouseStateChange: (isDown?: boolean) => void;
  onToggleState: () => void;
  onVolumeChange: ({ value, isTurnOff }: IMusicVolume) => void;
  onProgressChange: (target: HTMLInputElement) => void;
  onMusicChange: ({ music, isNext }: IMusicChange) => void;
  onToggleShuffle: () => void;
}

const Player = forwardRef(
  (
    {
      playerProps,
      shuffle,
      dibs,
      selectedMusic,
      onToggleDibs,
      onStateChange,
      onMouseStateChange,
      onToggleState,
      onVolumeChange,
      onProgressChange,
      onMusicChange,
      onToggleShuffle,
    }: Props,
    ref: LegacyRef<Youtube>,
  ) => {
    const { currentTime, duration, volume, muted, paused } = playerProps;
    const customProps = {
      videoId: selectedMusic.videoId,
      volume,
      muted,
      paused,
    };

    return (
      <Styled.Container>
        <H2A11Y>플레이어</H2A11Y>
        {isEmptyObj(selectedMusic) ? (
          <Styled.Empty>재생중인 음악이 없습니다</Styled.Empty>
        ) : (
          <>
            <Profile selectedMusic={selectedMusic} />

            <Controls
              paused={paused}
              selectedMusic={selectedMusic}
              shuffle={shuffle}
              onMusicChange={onMusicChange}
              onToggleState={onToggleState}
              onToggleShuffle={onToggleShuffle}
            />

            <Progress
              duration={duration}
              currentTime={currentTime}
              onProgressChange={onProgressChange}
              onMouseStateChange={onMouseStateChange}
            />

            <Sound
              volume={volume}
              muted={muted}
              onVolumeChange={onVolumeChange}
            />

            <Dibs
              dibs={dibs}
              selectedMusic={selectedMusic}
              onToggleDibs={onToggleDibs}
            />
          </>
        )}
        <Styled.YoutubeIframe>
          <Youtube
            ref={ref}
            customProps={customProps}
            stateChangeHandler={onStateChange}
            autoplay
          />
        </Styled.YoutubeIframe>
      </Styled.Container>
    );
  },
);

export default Player;
