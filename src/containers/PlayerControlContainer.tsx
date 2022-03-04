import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IMusic } from '../@types/music';
import Player from '../components/common/Player';
import { playerState } from '../store/playerState';
import { playlistState } from '../store/playlistState';

interface Props {
  dibs: boolean;
  selectedMusic: IMusic;
  handleDjplaylist: (music: IMusic) => void;
}

function PlayerControlContainer({
  dibs,
  selectedMusic,
  handleDjplaylist,
}: Props) {
  const playlist = useRecoilValue(playlistState);
  const setPlayer = useSetRecoilState(playerState);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);
  const player = useRef<any>(null);
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

  const handlePrevMusic = (music: IMusic, isNext?: boolean) => {
    const playlistLen = playlist.length - 1;

    const curPlayMusicIdx = playlist.findIndex(
      (item) => item.videoId === music.videoId,
    );

    if (curPlayMusicIdx === -1) return;

    const nextMusic = isNext
      ? playlist[curPlayMusicIdx === playlistLen ? 0 : curPlayMusicIdx + 1]
      : playlist[curPlayMusicIdx === 0 ? playlistLen : curPlayMusicIdx - 1];

    setPlayer((prev) => ({
      ...prev,
      selectedMusic: nextMusic,
    }));
  };

  const handleNextMusic = (music: IMusic) => handlePrevMusic(music, true);

  const handleTimer = (target: any) => {
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

  const handleSync = (target: any) => {
    setCurrentTime(target.getCurrentTime());
    setDuration(target.getDuration());
  };

  const handleStateChange = (e: YT.OnStateChangeEvent) => {
    const { data: state } = e;
    clearInterval(timer.current as NodeJS.Timeout);

    if (state === 1) {
      setPaused(false);
      handleSync(e.target);
      handleTimer(e.target);
    }

    if (state === 2) setPaused(true);
  };

  const handleMouseDown = () => setIsClick(true);

  const handleMouseUp = () => {
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

  const handleVolume = (value: string) => {
    const valueToNumber = parseFloat(value);

    if (valueToNumber > 0 && muted) setMuted(false);
    setVolume(valueToNumber);
  };

  const handleTurnOnVolume = () => {
    setVolume(0.5);
    setMuted(false);
  };

  const handleTurnOffVolume = () => {
    setVolume(0);
    setMuted(true);
  };

  const handleProgress = (target: HTMLInputElement) => {
    const willUpdateCurrentTime = target.value;

    player.current?.playerInstance?.seekTo(willUpdateCurrentTime);
    setCurrentTime(parseFloat(willUpdateCurrentTime));
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
