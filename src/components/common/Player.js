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
import PlayerProfile from './PlayerProfile';
import PlayerProgress from './PlayerProgress';
import {
  PlayerContainer,
  PlayerControls,
  PlayerMainButton,
  PlayerNextButton,
  PlayerPrevButton,
  PlayerSoundControl,
  PlayerSoundControlWrapper,
  YoutubeIframe,
} from '../../styles/PlayerStyle';

function Player({
  playerProps,
  selectedMusic,
  handleReady,
  handleStateChange,
  handleState,
  handleVolume,
  handleTurnOnVolume,
  handleTurnOffVolume,
  handleProgress,
}) {
  const { currentTime, duration, volume, muted, paused } = playerProps;
  const { videoId } = selectedMusic;

  return (
    <PlayerContainer>
      <YoutubeIframe>
        <YouTube
          video={videoId}
          paused={paused}
          volume={volume}
          muted={muted}
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
    </PlayerContainer>
  );
}

export default Player;
