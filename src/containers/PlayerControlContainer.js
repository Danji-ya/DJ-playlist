import React, { useEffect, useState } from 'react';
import Player from '../components/common/Player';

function PlayerControlContainer({ dibs, selectedMusic, handleDjplaylist }) {
  const [player, setPlayer] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // 음악이 바뀌어도 변하지 않아야할 값
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(true);

  const updateProgress = () => {
    const curTime = player.getCurrentTime();
    setCurrentTime(curTime);
  };

  const isEnded = state => state.getPlayerState() === 0;

  useEffect(() => {
    let timer;

    if (player && !paused) {
      clearInterval(timer);
      timer = setInterval(() => {
        updateProgress();
      }, 1000);
    } else if (player && paused) {
      if (!isEnded(player)) {
        clearInterval(timer);
        updateProgress();
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [player, paused]);

  useEffect(() => {
    if (player) {
      player.seekTo(0);
    }
  }, [selectedMusic]);

  const handleStateChange = e => {
    const { data: state } = e;
    setPlayer(e.target);
    if (state !== 0) {
      setCurrentTime(e.target.getCurrentTime());
      setDuration(e.target.getDuration());
    }
    console.log('video state', state);

    // -1 –시작되지 않음 0 – 종료 1 – 재생 중 2 – 일시중지 3 – 버퍼링 5 – 동영상 신호
    if (state === 0) {
      // ended
      player.pauseVideo();
      player.seekTo(0);
      setPaused(true);
      setCurrentTime(duration);
    } else if (state === 1) {
      setPaused(false);
    }
  };

  const handleState = () => {
    setPaused(!paused);
  };

  const handleVolume = value => {
    if (value > 0 && muted) setMuted(false);
    setVolume(parseFloat(value));
  };

  const handleTurnOnVolume = () => {
    setVolume(0.5);
    setMuted(false);
  };

  const handleTurnOffVolume = () => {
    setVolume(0);
    setMuted(true);
  };

  const handleProgress = target => {
    const willUpdateCurrentTime = target.value;

    player.seekTo(willUpdateCurrentTime);
    setCurrentTime(willUpdateCurrentTime);
  };

  return (
    <Player
      playerProps={{
        player,
        currentTime,
        duration,
        volume,
        muted,
        paused,
      }}
      dibs={dibs}
      selectedMusic={selectedMusic}
      handleDjplaylist={handleDjplaylist}
      handleStateChange={handleStateChange}
      handleState={handleState}
      handleVolume={handleVolume}
      handleTurnOnVolume={handleTurnOnVolume}
      handleTurnOffVolume={handleTurnOffVolume}
      handleProgress={handleProgress}
    />
  );
}

export default PlayerControlContainer;
