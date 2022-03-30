import { forwardRef, LegacyRef } from 'react';
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
import CustomYoutube from './CustomYoutube';

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
    ref: LegacyRef<CustomYoutube>,
  ) => {
    const { currentTime, duration, volume, muted, paused } = playerProps;
    const customProps = {
      videoId: selectedMusic.videoId,
      volume,
      muted,
      paused,
    };

    // TODO: 음악 바꾸기 !== -> ===
    return (
      <PlayerContainer>
        {Object.keys(selectedMusic).length !== 0 ? (
          <PlayerEmpty>재생중인 음악이 없습니다</PlayerEmpty>
        ) : (
          <>
            <PlayerProfile selectedMusic={selectedMusic} />
            <PlayerControls>
              <PlayerPrevButton
                onClick={() => handleChangeMusic(selectedMusic)}
                aria-label="music play prev button"
              >
                <icons.Prev size={30} />
              </PlayerPrevButton>

              <PlayerMainButton
                onClick={handleState}
                aria-label="music play state button"
              >
                {paused ? (
                  <icons.Play width="35px" height="35px" />
                ) : (
                  <icons.Pause width="35px" height="35px" />
                )}
              </PlayerMainButton>

              <PlayerNextButton
                onClick={() => handleChangeMusic(selectedMusic, true)}
                aria-label="music play next button"
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
                <icons.VolumeOff
                  onClick={() => handleVolume('', false)}
                  aria-label="music volumeUp button"
                />
              ) : (
                <icons.VolumeUp
                  onClick={() => handleVolume('', true)}
                  aria-label="music volumeOff button"
                />
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
              aria-label="dibs button"
            >
              <icons.Heart />
            </AddButton>
          </>
        )}
        <YoutubeIframe>
          <CustomYoutube
            ref={ref}
            customProps={customProps}
            stateChangeHandler={handleStateChange}
            autoplay
            playsInline
          />
        </YoutubeIframe>
      </PlayerContainer>
    );
  },
);

export default Player;
