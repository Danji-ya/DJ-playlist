import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IMusic, IMusicChange, IMusicVolume } from '../@types/music';
import Player from '../components/Player';
import { NOT_INCLUDE_DJPLAYLIST, PLAYER_STATE } from '../constants/player';
import { playerState } from '../store/playerState';
import { playlistState } from '../store/playlistState';

interface Props {
  shuffle: boolean;
  dibs: boolean;
  selectedMusic: IMusic;
  handleDjplaylist: (music: IMusic) => void;
}

function PlayerControlContainer({
  shuffle,
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

  const shufflePlaylist = (oriPlaylist: IMusic[]) => {
    const copiedPlaylist = [...oriPlaylist];

    for (let i = copiedPlaylist.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));

      [copiedPlaylist[i], copiedPlaylist[j]] = [
        copiedPlaylist[j],
        copiedPlaylist[i],
      ];
    }

    return copiedPlaylist;
  };

  const handleShuffle = () => {
    setPlayer((prev) => ({
      ...prev,
      shuffle: !prev.shuffle,
    }));
  };

  const getCurrentMusicIdx = ({
    newPlaylist,
    curMusic,
  }: {
    newPlaylist: IMusic[];
    curMusic: IMusic;
  }) => newPlaylist.findIndex((item) => item.videoId === curMusic.videoId);

  const handleChangeMusic = ({ music, isNext }: IMusicChange) => {
    const playlistLen = playlist.length - 1;
    const newPlaylist = shuffle ? shufflePlaylist(playlist) : playlist;

    const curPlayMusicIdx = getCurrentMusicIdx({
      newPlaylist,
      curMusic: music,
    });

    if (curPlayMusicIdx === NOT_INCLUDE_DJPLAYLIST) return;

    const nextMusic = isNext
      ? newPlaylist[curPlayMusicIdx === playlistLen ? 0 : curPlayMusicIdx + 1]
      : newPlaylist[curPlayMusicIdx === 0 ? playlistLen : curPlayMusicIdx - 1];

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
      shuffle={shuffle}
      selectedMusic={selectedMusic}
      handleDjplaylist={handleDjplaylist}
      handleStateChange={handleStateChange}
      handleMouse={handleMouse}
      handleState={handleState}
      handleVolume={handleVolume}
      handleProgress={handleProgress}
      handleChangeMusic={handleChangeMusic}
      handleShuffle={handleShuffle}
    />
  );
}

export default PlayerControlContainer;
