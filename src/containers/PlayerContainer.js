import React, { useEffect, useState } from 'react';
import { fetchPlayList } from '../api/youtube';
import Player from '../components/common/Player';

function PlayerContainer() {
  // sample
  const selectedMusic = {
    videoId: 'Nh27WsNdymo',
    title: '[𝐅𝐮𝐥𝐥] 아이유 노래모음 | IU songs playlist',
    subtitle: '스너그 playlist',
    url: 'https://i.ytimg.com/vi/Nh27WsNdymo/hqdefault.jpg',
  };

  //   useEffect(() => {
  //     async function getData() {
  //       try {
  //         const data = await fetchPlayList('아이유');
  //         setSelectedMusic(data);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //     getData();
  //   }, []);

  const [player, setPlayer] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(true); // default: autoplay false
  const { videoId, title, url } = selectedMusic;

  const updateProgress = () => {
    const curTime = player.getCurrentTime();
    setCurrentTime(curTime);
  };

  const isPaused = state => state.getPlayerState() === 0;

  useEffect(() => {
    let timer;

    if (player && !paused) {
      player.playVideo();
      clearInterval(timer);
      timer = setInterval(() => {
        updateProgress();
      }, 1000);
    } else if (player && paused) {
      if (!isPaused(player)) {
        clearInterval(timer);
        updateProgress();
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [player, paused]);

  const handleReady = target => {
    setPlayer(target);
    // target.playVideo();
    setCurrentTime(target.getCurrentTime());
    setDuration(target.getDuration());
  };

  const handleStateChange = e => {
    const { data: state } = e;
    console.log('video state', state);

    // -1 –시작되지 않음
    // 0 – 종료
    // 1 – 재생 중
    // 2 – 일시중지
    // 3 – 버퍼링
    // 5 – 동영상 신호
    if (state === 0) {
      // ended
      player.pauseVideo();
      player.seekTo(0);
      setPaused(true);
      setCurrentTime(duration);
    }
    setPlayer(e.target);
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
      selectedMusic={selectedMusic}
      handleReady={handleReady}
      handleStateChange={handleStateChange}
      handleState={handleState}
      handleVolume={handleVolume}
      handleTurnOnVolume={handleTurnOnVolume}
      handleTurnOffVolume={handleTurnOffVolume}
      handleProgress={handleProgress}
    />
  );
}

export default PlayerContainer;
