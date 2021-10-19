import React, { forwardRef } from 'react';
import YouTube from '@u-wave/react-youtube';
import {
  MdPause,
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeOff,
  MdVolumeUp,
} from 'react-icons/md';
import { BsHeartFill } from 'react-icons/bs';
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
} from '../../styles/playerStyle';

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
    },
    ref,
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
                enablejsapi={1}
                host="https://www.youtube.com"
              />
            </YoutubeIframe>

            <PlayerProfile selectedMusic={selectedMusic} />
            <PlayerControls>
              <PlayerPrevButton onClick={() => handlePrevMusic(selectedMusic)}>
                <MdSkipPrevious size={30} />
              </PlayerPrevButton>

              <PlayerMainButton onClick={handleState}>
                {paused ? <MdPlayArrow size={40} /> : <MdPause size={40} />}
              </PlayerMainButton>

              <PlayerNextButton onClick={() => handleNextMusic(selectedMusic)}>
                <MdSkipNext size={30} />
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
                <MdVolumeOff name="volumeOff" size={25} onClick={handleTurnOnVolume} />
              ) : (
                <MdVolumeUp name="volumeUp" size={25} onClick={handleTurnOffVolume} />
              )}
              <PlayerSoundControl
                type="range"
                name="volume"
                value={volume}
                min="0"
                max="1"
                step="0.05"
                onChange={e => handleVolume(e.target.value)}
              />
            </PlayerSoundControlWrapper>
            <AddButton dibs={dibs} onClick={() => handleDjplaylist(selectedMusic)}>
              <BsHeartFill size={20} />
            </AddButton>
          </>
        )}
      </PlayerContainer>
    );
  },
);

export default Player;
