import { forwardRef, LegacyRef } from 'react';
import PlayerProfile from './PlayerProfile';
import PlayerProgress from './PlayerProgress';
import * as Styled from '../../../styles/player';
import { icons } from '../../../constants';
import { IMusic, IMusicChange, IMusicVolume } from '../../../@types/music';
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
            <PlayerProfile selectedMusic={selectedMusic} />
            <Styled.Controls>
              <Styled.PrevButton
                onClick={() => handleChangeMusic({ music: selectedMusic })}
                aria-label="music play prev button"
              >
                <icons.Prev size={30} />
              </Styled.PrevButton>

              <Styled.MainButton
                onClick={handleState}
                aria-label="music play state button"
              >
                {paused ? (
                  <icons.Play width="35px" height="35px" />
                ) : (
                  <icons.Pause width="35px" height="35px" />
                )}
              </Styled.MainButton>

              <Styled.NextButton
                onClick={() =>
                  handleChangeMusic({ music: selectedMusic, isNext: true })
                }
                aria-label="music play next button"
              >
                <icons.Next />
              </Styled.NextButton>
            </Styled.Controls>

            <PlayerProgress
              duration={duration}
              currentTime={currentTime}
              handleProgress={handleProgress}
              handleMouseDown={() => handleMouse(true)}
              handleMouseUp={() => handleMouse()}
            />

            <Styled.SoundControl>
              {muted || volume === 0 ? (
                <icons.VolumeOff
                  onClick={() => handleVolume({ value: '', isTurnOff: false })}
                  aria-label="music volumeUp button"
                />
              ) : (
                <icons.VolumeUp
                  onClick={() => handleVolume({ value: '', isTurnOff: true })}
                  aria-label="music volumeOff button"
                />
              )}
              <Styled.Input
                type="range"
                name="volume"
                value={volume}
                min="0"
                max="1"
                step="0.05"
                onChange={(e) => handleVolume({ value: e.target.value })}
              />
            </Styled.SoundControl>
            <Styled.AddButton
              dibs={dibs}
              onClick={() => handleDjplaylist(selectedMusic)}
              aria-label="dibs button"
            >
              <icons.Heart />
            </Styled.AddButton>
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
