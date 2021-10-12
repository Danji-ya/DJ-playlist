import React, { useCallback, useEffect, useState } from 'react';
import YouTube from '@u-wave/react-youtube';
import styled, { css } from 'styled-components';
import {
  MdPause,
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeDownAlt,
  MdVolumeDown,
  MdVolumeMute,
  MdVolumeOff,
  MdVolumeUp,
} from 'react-icons/md';
import PlayerProfile from './PlayerProfile';

const PlayerContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: rgb(34, 34, 34);
  padding: 10px 25px;
`;

const PlayerControls = styled.div`
  display: flex;
  align-items: center;

  svg {
    &:hover {
      cursor: pointer;
      opacity: 0.1;
    }
  }
`;

const PlayerMainButton = styled.div`
  background: white;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: black;
  }

  &:hover {
    cursor: pointer;
  }
`;

const PlayerProgressWrapper = styled.div`
  height: 6px;
  width: 30%;
  background: #ffffff;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    div:before {
      opacity: 1;
    }
  }
`;

const PlayerProgressBar = styled.div`
  height: inherit;
  width: 10%;
  position: relative;
  border-radius: inherit;
  background: linear-gradient(90deg, #44bfa3 0%, #44bf9a 100%);

  &:before {
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    top: 50%;
    right: -5px;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-50%);
    background: inherit;
    transition: opacity 0.2s ease;
    background: #44bfa3;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.32);
  }
`;

const PlayerDuration = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: pink;
  font-size: 0.8rem;
`;

const PlayerSoundControlWrapper = styled.div`
  display: flex;
`;

const PlayerSoundControl = styled.input`
  background-size: ${({ value }) => `${value * 100}% 100%`};
  border-radius: 5px;
  background-image: linear-gradient(#44bf9a, #44bf9a);
  background-repeat: no-repeat;

  width: 100px;
  height: 5px;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 12px;
    width: 12px;
    background: #44bfa3;
    border-radius: 100%;
    opacity: 0;
  }
  &:hover {
    &::-webkit-slider-thumb {
      opacity: 1;
    }
  }

  -webkit-appearance: none;
`;

const PlayerSoundBar = styled.div``;

const PlayerFullScreen = styled.div``;

const YoutubeIframe = styled.div`
  position: fixed;
  bottom: -1000px;
`;

function Player({ selectedMusic }) {
  const [player, setPlayer] = useState();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  const { videoId, title, url } = selectedMusic;

  useEffect(() => {
    if (player && !paused) {
      console.log('player');
      player.playVideo();
    }
  }, [player, paused]);

  const handleReady = target => {
    console.log('ready');
    setPlayer(target);
  };

  const handleState = () => {
    setPaused(!paused);
  };

  const handleVolume = value => setVolume(parseFloat(value));

  return (
    <PlayerContainer>
      <YoutubeIframe>
        <YouTube
          video={videoId}
          autoplay
          paused={paused}
          volume={volume}
          muted={muted}
          onReady={e => handleReady(e.target)}
        />
      </YoutubeIframe>

      <PlayerProfile selectedMusic={selectedMusic} />
      <PlayerControls>
        <MdSkipPrevious size={30} />
        <PlayerMainButton onClick={handleState}>
          {paused ? <MdPlayArrow size={40} /> : <MdPause name="pause" size={40} />}
        </PlayerMainButton>
        <MdSkipNext size={30} />
      </PlayerControls>

      <PlayerProgressWrapper>
        <PlayerProgressBar />
      </PlayerProgressWrapper>

      <PlayerSoundControlWrapper>
        <MdVolumeUp size={25} />
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
