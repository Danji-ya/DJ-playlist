import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Player from '../components/common/Player';
import { nextMusic, prevMusic } from '../store/modules/music';

function PlayerControlContainer({ dibs, selectedMusic, handleDjplaylist }) {
  const dispatch = useDispatch();
  const timer = useRef(null);
  const player = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isClick, setIsClick] = useState(false);

  // 음악이 바뀌어도 변하지 않아야할 값
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    player.current?.playerInstance?.seekTo(0);
    player.current?.playerInstance?.playVideo();
  }, [selectedMusic]);

  const handlePrevMusic = music => dispatch(prevMusic(music));
  const handleNextMusic = music => dispatch(nextMusic(music));

  const handleTimer = target => {
    timer.current = setInterval(() => {
      setCurrentTime(
        target.getCurrentTime() > target.getDuration()
          ? target.getDuration()
          : target.getCurrentTime(),
      );
      setDuration(target.getDuration());
    }, 1000);
  };

  const setPlayerSeekInit = () => {
    setPaused(true);
    player.current?.playerInstance?.seekTo(0);
    setCurrentTime(0);

    // change music
    handleNextMusic(selectedMusic);
  };

  const handleSync = target => {
    setCurrentTime(target.getCurrentTime());
    setDuration(target.getDuration());
  };

  const handleStateChange = e => {
    const { data: state } = e;
    // console.log('video state', state, isClick);
    clearInterval(timer.current);

    if (state === 1) {
      setPaused(false);
      handleSync(e.target);
      handleTimer(e.target);
    }

    if (state === 2) setPaused(true);
  };

  const handleMouseDown = target => setIsClick(true);

  const handleMouseUp = target => {
    if (Math.floor(currentTime) >= Math.floor(duration)) setPlayerSeekInit();

    setIsClick(false);
  };

  const handleEnded = () => {
    if (!isClick) {
      setPlayerSeekInit();
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

    player.current?.playerInstance?.seekTo(willUpdateCurrentTime);
    setCurrentTime(willUpdateCurrentTime);
  };

  return (
    <Player
      ref={player}
      playerProps={{
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
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      handleEnded={handleEnded}
      handleState={handleState}
      handleVolume={handleVolume}
      handleTurnOnVolume={handleTurnOnVolume}
      handleTurnOffVolume={handleTurnOffVolume}
      handleProgress={handleProgress}
      handlePrevMusic={handlePrevMusic}
      handleNextMusic={handleNextMusic}
    />
  );
}

export default PlayerControlContainer;
