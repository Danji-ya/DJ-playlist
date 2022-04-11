import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IMusic, IMusicChange, IMusicVolume } from '../@types/music';
import Player from '../components/common/Player';
import { PLAYER_STATE } from '../constants/player';
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
  const player = useRef<any>(null);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);
  const isClick = useRef<boolean>(false);
  const playlist = useRecoilValue(playlistState);
  const setPlayer = useSetRecoilState(playerState);

  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!player.current?.player) return undefined;
    player.current.player.seekTo(0);
    setCurrentTime(0);

    return () => {
      clearInterval(timer.current as NodeJS.Timeout);
    };
  }, [selectedMusic]);

  const handleChangeMusic = ({ music, isNext }: IMusicChange) => {
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

  const handleTimer = (target: YT.Player) => {
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
    player.current?.player?.seekTo(0);
    setCurrentTime(0);
    handleChangeMusic({ music: selectedMusic, isNext: true });
  };

  const handleSync = (target: YT.Player) => {
    setCurrentTime(target.getCurrentTime());
    setDuration(target.getDuration());
  };

  const handleStateChange = (e: YT.OnStateChangeEvent) => {
    const { data: state } = e;
    clearInterval(timer.current as NodeJS.Timeout);

    switch (state) {
      case PLAYER_STATE.PLAYING: {
        setPaused(false);
        handleSync(e.target);
        handleTimer(e.target);
        break;
      }

      case PLAYER_STATE.ENDED: {
        if (isClick.current) break;
        setPlayerSeekInit();
        break;
      }

      default:
    }
  };

  const handleMouse = (isDown?: boolean) => {
    if (isDown) {
      isClick.current = true;
      return;
    }

    if (Math.floor(currentTime) >= Math.floor(duration)) setPlayerSeekInit();

    isClick.current = false;
  };

  const handleState = () => {
    setPaused((prev) => !prev);
  };

  const handleVolume = ({ value, isTurnOff }: IMusicVolume) => {
    if (isTurnOff) {
      setVolume(0);
      setMuted(true);
      return;
    }

    if (isTurnOff === false) {
      setVolume(0.5);
      setMuted(false);
      return;
    }

    const valueToNumber = parseFloat(value);

    if (valueToNumber > 0 && muted) setMuted(false);
    setVolume(valueToNumber);
  };

  const handleProgress = (target: HTMLInputElement) => {
    const willUpdateCurrentTime = parseFloat(target.value);

    player.current?.player?.seekTo(willUpdateCurrentTime);
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
      handleMouse={handleMouse}
      handleState={handleState}
      handleVolume={handleVolume}
      handleProgress={handleProgress}
      handleChangeMusic={handleChangeMusic}
    />
  );
}

export default PlayerControlContainer;
