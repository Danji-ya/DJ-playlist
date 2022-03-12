import { forwardRef, LegacyRef } from 'react';
import YouTube from '@u-wave/react-youtube';
import PlayerProfile from './PlayerProfile';
import PlayerProgress from './PlayerProgress';
import {
  PlayerContainer,
  PlayerEmpty,
  PlayerControls,
  PlayerMainButton,
  PlayerNextButton,
  PlayerPrevButton,
  PlayerSoundControl,
  PlayerSoundControlWrapper,
  YoutubeIframe,
  AddButton,
} from '../../styles/player';
import { icons } from '../../constants';
import { IMusic } from '../../@types/music';

interface Props {
  playerProps: {
    currentTime: number;
    duration: number;
    volume: number;
    muted: boolean;
    paused: boolean;
  };
  dibs: boolean;
  selectedMusic: IMusic;
  handleDjplaylist: (music: IMusic) => void;
  handleStateChange: (e: YT.OnStateChangeEvent) => void;
  handleMouse: (isDown?: boolean) => void;
  handleState: () => void;
  handleVolume: (value: string, isTurnOff?: boolean) => void;
  handleProgress: (target: HTMLInputElement) => void;
  handleChangeMusic: (music: IMusic, isNext?: boolean) => void;
}

const Player = forwardRef(
  (
    {
      playerProps,
      dibs,
      selectedMusic,
      handleDjplaylist,
      handleStateChange,
      handleMouse,
      handleState,
      handleVolume,
      handleProgress,
      handleChangeMusic,
    }: Props,
    ref: LegacyRef<YouTube>,
  ) => {
    const { currentTime, duration, volume, muted, paused } = playerProps;

    return (
      <PlayerContainer>
        {Object.keys(selectedMusic).length === 0 ? (
          <PlayerEmpty>재생중인 음악이 없습니다</PlayerEmpty>
        ) : (
          <>
            <YoutubeIframe>
              <YouTube
                ref={ref}
                video={selectedMusic.videoId}
                paused={paused}
                volume={volume}
                muted={muted}
                autoplay
                onStateChange={handleStateChange}
                onReady={(event) => {
                  event.target.playVideo();
                }}
                playsInline
              />
            </YoutubeIframe>

            <PlayerProfile selectedMusic={selectedMusic} />
            <PlayerControls>
              <PlayerPrevButton
                onClick={() => handleChangeMusic(selectedMusic)}
              >
                <icons.Prev size={30} />
              </PlayerPrevButton>

              <PlayerMainButton onClick={handleState}>
                {paused ? (
                  <icons.Play width="35px" height="35px" />
                ) : (
                  <icons.Pause width="35px" height="35px" />
                )}
              </PlayerMainButton>

              <PlayerNextButton
                onClick={() => handleChangeMusic(selectedMusic, true)}
              >
                <icons.Next />
              </PlayerNextButton>
            </PlayerControls>

            <PlayerProgress
              duration={duration}
              currentTime={currentTime}
              handleProgress={handleProgress}
              handleMouseDown={() => handleMouse(true)}
              handleMouseUp={() => handleMouse()}
            />

            <PlayerSoundControlWrapper>
              {muted || volume === 0 ? (
                <icons.VolumeOff onClick={() => handleVolume('', false)} />
              ) : (
                <icons.VolumeUp onClick={() => handleVolume('', true)} />
              )}
              <PlayerSoundControl
                type="range"
                name="volume"
                value={volume}
                min="0"
                max="1"
                step="0.05"
                onChange={(e) => handleVolume(e.target.value)}
              />
            </PlayerSoundControlWrapper>
            <AddButton
              dibs={dibs}
              onClick={() => handleDjplaylist(selectedMusic)}
            >
              <icons.Heart />
            </AddButton>
          </>
        )}
      </PlayerContainer>
    );
  },
);

export default Player;
