import React from 'react';
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
} from '../../styles/PlayerStyle';

function Player({
  playerProps,
  dibs,
  selectedMusic,
  handleDjplaylist,
  handleReady,
  handleStateChange,
  handleState,
  handleVolume,
  handleTurnOnVolume,
  handleTurnOffVolume,
  handleProgress,
}) {
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
              video={selectedMusic.videoId}
              paused={paused}
              volume={volume}
              muted={muted}
              autoplay
              onReady={e => handleReady(e.target)}
              onStateChange={handleStateChange}
              enablejsapi={1}
              host="https://www.youtube.com"
            />
          </YoutubeIframe>

          <PlayerProfile selectedMusic={selectedMusic} />
          <PlayerControls>
            <PlayerPrevButton>
              <MdSkipPrevious size={30} />
            </PlayerPrevButton>

            <PlayerMainButton onClick={handleState}>
              {paused ? <MdPlayArrow size={40} /> : <MdPause size={40} />}
            </PlayerMainButton>

            <PlayerNextButton>
              <MdSkipNext size={30} />
            </PlayerNextButton>
          </PlayerControls>

          <PlayerProgress
            duration={duration}
            currentTime={currentTime}
            handleProgress={handleProgress}
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
}

export default Player;
