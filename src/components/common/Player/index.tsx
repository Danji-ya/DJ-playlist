import { forwardRef, LegacyRef } from 'react';
import PlayerProfile from './PlayerProfile';
import PlayerProgress from './PlayerProgress';
import * as S from '../../../styles/player';
import { icons } from '../../../constants';
import { IMusic } from '../../../@types/music';
import Youtube from '../Youtube';

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
      <S.PlayerContainer>
        {Object.keys(selectedMusic).length === 0 ? (
          <S.PlayerEmpty>재생중인 음악이 없습니다</S.PlayerEmpty>
        ) : (
          <>
            <PlayerProfile selectedMusic={selectedMusic} />
            <S.PlayerControls>
              <S.PlayerPrevButton
                onClick={() => handleChangeMusic(selectedMusic)}
                aria-label="music play prev button"
              >
                <icons.Prev size={30} />
              </S.PlayerPrevButton>

              <S.PlayerMainButton
                onClick={handleState}
                aria-label="music play state button"
              >
                {paused ? (
                  <icons.Play width="35px" height="35px" />
                ) : (
                  <icons.Pause width="35px" height="35px" />
                )}
              </S.PlayerMainButton>

              <S.PlayerNextButton
                onClick={() => handleChangeMusic(selectedMusic, true)}
                aria-label="music play next button"
              >
                <icons.Next />
              </S.PlayerNextButton>
            </S.PlayerControls>

            <PlayerProgress
              duration={duration}
              currentTime={currentTime}
              handleProgress={handleProgress}
              handleMouseDown={() => handleMouse(true)}
              handleMouseUp={() => handleMouse()}
            />

            <S.PlayerSoundControlWrapper>
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
              <S.PlayerSoundControl
                type="range"
                name="volume"
                value={volume}
                min="0"
                max="1"
                step="0.05"
                onChange={(e) => handleVolume(e.target.value)}
              />
            </S.PlayerSoundControlWrapper>
            <S.AddButton
              dibs={dibs}
              onClick={() => handleDjplaylist(selectedMusic)}
              aria-label="dibs button"
            >
              <icons.Heart />
            </S.AddButton>
          </>
        )}
        <S.YoutubeIframe>
          <Youtube
            ref={ref}
            customProps={customProps}
            stateChangeHandler={handleStateChange}
            autoplay
          />
        </S.YoutubeIframe>
      </S.PlayerContainer>
    );
  },
);

export default Player;
