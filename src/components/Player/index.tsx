import { forwardRef, LegacyRef } from 'react';
import Profile from './Profile';
import Progress from './Progress';
import Styled from './Player.style';
import { IMusic, IMusicChange, IMusicVolume } from '../../@types/music';
import Youtube from '../common/Youtube';
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
  handleDjplaylist: (music: IMusic) => void;
  handleStateChange: (e: YT.OnStateChangeEvent) => void;
  handleMouse: (isDown?: boolean) => void;
  handleState: () => void;
  handleVolume: ({ value, isTurnOff }: IMusicVolume) => void;
  handleProgress: (target: HTMLInputElement) => void;
  handleChangeMusic: ({ music, isNext }: IMusicChange) => void;
  handleShuffle: () => void;
}

const Player = forwardRef(
  (
    {
      playerProps,
      shuffle,
      dibs,
      selectedMusic,
      handleDjplaylist,
      handleStateChange,
      handleMouse,
      handleState,
      handleVolume,
      handleProgress,
      handleChangeMusic,
      handleShuffle,
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
        {Object.keys(selectedMusic).length === 0 ? (
          <Styled.Empty>재생중인 음악이 없습니다</Styled.Empty>
        ) : (
          <>
            <Profile selectedMusic={selectedMusic} />

            <Controls
              paused={paused}
              selectedMusic={selectedMusic}
              shuffle={shuffle}
              handleChangeMusic={handleChangeMusic}
              handleState={handleState}
              handleShuffle={handleShuffle}
            />

            <Progress
              duration={duration}
              currentTime={currentTime}
              handleProgress={handleProgress}
              handleMouseDown={() => handleMouse(true)}
              handleMouseUp={() => handleMouse()}
            />

            <Sound volume={volume} muted={muted} handleVolume={handleVolume} />

            <Dibs
              dibs={dibs}
              selectedMusic={selectedMusic}
              handleDjplaylist={handleDjplaylist}
            />
          </>
        )}
        <Styled.YoutubeIframe>
          <Youtube
            ref={ref}
            customProps={customProps}
            stateChangeHandler={handleStateChange}
            autoplay
          />
        </Styled.YoutubeIframe>
      </Styled.Container>
    );
  },
);

export default Player;
