import { forwardRef } from 'react';
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
import Play from '../../assets/icons/play2.svg';
import Pause from '../../assets/icons/pause.svg';
import Prev from '../../assets/icons/prev.svg';
import Next from '../../assets/icons/next.svg';
import Heart from '../../assets/icons/heart.svg';
import VolumeOff from '../../assets/icons/volumeOff.svg';
import VolumeUp from '../../assets/icons/volumeUp.svg';

const Player = forwardRef(
  (
    {
      playerProps,
      dibs,
      selectedMusic,
      handleDjplaylist,
      handleStateChange,
      handleMouseDown,
      handleMouseUp,
      handleEnded,
      handleState,
      handleVolume,
      handleTurnOnVolume,
      handleTurnOffVolume,
      handleProgress,
      handlePrevMusic,
      handleNextMusic,
    }: any,
    ref: any,
  ) => {
    const { currentTime, duration, volume, muted, paused } = playerProps;

    // player와 props 통일 필수
    return (
      <PlayerContainer>
        {JSON.stringify(selectedMusic) === '{}' ? (
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
                onEnd={handleEnded}
              />
            </YoutubeIframe>

            <PlayerProfile selectedMusic={selectedMusic} />
            <PlayerControls>
              <PlayerPrevButton onClick={() => handlePrevMusic(selectedMusic)}>
                <Prev size={30} />
              </PlayerPrevButton>

              <PlayerMainButton onClick={handleState}>
                {paused ? (
                  <Play width="35px" height="35px" />
                ) : (
                  <Pause width="35px" height="35px" />
                )}
              </PlayerMainButton>

              <PlayerNextButton onClick={() => handleNextMusic(selectedMusic)}>
                <Next />
              </PlayerNextButton>
            </PlayerControls>

            <PlayerProgress
              duration={duration}
              currentTime={currentTime}
              handleProgress={handleProgress}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
            />

            <PlayerSoundControlWrapper>
              {muted || volume === 0 ? (
                <VolumeOff onClick={handleTurnOnVolume} />
              ) : (
                <VolumeUp onClick={handleTurnOffVolume} />
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
              <Heart />
            </AddButton>
          </>
        )}
      </PlayerContainer>
    );
  },
);

export default Player;
