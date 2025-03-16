import { useCallback, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { playlistState } from '@store/playlistState';
import { playerState } from '@store/playerState';
import useToast from '@services/hooks/useToast';
import { MESSAGE } from '@constants/messages';
import { IMusic, ISwapRoute } from '@typings/music';
import { isEmptyObj } from '@utils/common';

interface UsePlaylistReturn {
  playlist: IMusic[];
  dragControls: {
    onDragStart: (e: React.DragEvent<HTMLLIElement>) => void;
    onDragOver: (e: React.DragEvent<HTMLLIElement>) => void;
    onDragDrop: (e: React.DragEvent<HTMLLIElement>) => void;
  };
  playlistControls: {
    onToggleDibs: (music: IMusic) => void;
    onSelectMusic: (selectedMusic: IMusic) => void;
  };
  isIncludeDjPlaylist: (music: IMusic) => boolean;
}

function usePlaylist(): UsePlaylistReturn {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const setPlayer = useSetRecoilState(playerState);
  const toast = useToast();
  const startEl = useRef<HTMLLIElement | null>(null);

  const isIncludeDjPlaylist = (music: IMusic) =>
    !isEmptyObj(music) &&
    playlist.filter((item: IMusic) => item.videoId === music.videoId).length >
      0;

  const deleteMusicFromDjPlaylist = (music: IMusic) => {
    const newPlaylist = playlist.filter(
      (item) => item.videoId !== music.videoId,
    );
    toast({
      type: 'error',
      title: '',
      message: MESSAGE.DELETE_MUSIC_SUCCESS,
    });
    return newPlaylist;
  };

  const addMusicFromDjPlaylist = (music: IMusic) => {
    const newPlaylist = [{ ...music }, ...playlist];
    toast({
      title: '',
      message: MESSAGE.ADD_MUSIC_SUCCESS,
    });
    return newPlaylist;
  };

  const onToggleDibs = (music: IMusic) => {
    const newPlaylist = isIncludeDjPlaylist(music)
      ? deleteMusicFromDjPlaylist(music)
      : addMusicFromDjPlaylist(music);
    setPlaylist(newPlaylist);
  };

  const onSelectMusic = (selectedMusic: IMusic) => {
    setPlayer((prev) => ({
      ...prev,
      selectedMusic,
    }));
  };

  const handleSwapDjplayList = useCallback(
    (route: ISwapRoute) => {
      const { oriIdx, desIdx } = route || {};
      if (oriIdx == null || desIdx == null) return;

      const newPlaylist = [...playlist];
      const temp = newPlaylist[desIdx];
      newPlaylist[desIdx] = newPlaylist[oriIdx];
      newPlaylist[oriIdx] = temp;

      setPlaylist(newPlaylist);
    },
    [playlist, setPlaylist],
  );

  const onDragStart = useCallback((e: React.DragEvent<HTMLLIElement>) => {
    startEl.current = e.target as HTMLLIElement;
  }, []);

  const onDragOver = useCallback((e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  }, []);

  const onDragDrop = useCallback(
    (e: React.DragEvent<HTMLLIElement>) => {
      const desIdx = Number(e.currentTarget.dataset.idx);

      if (desIdx == null || !startEl.current) return;

      const route = {
        oriIdx: Number(startEl.current.dataset.idx),
        desIdx,
      };

      handleSwapDjplayList(route);
      startEl.current = null;
    },
    [handleSwapDjplayList],
  );

  return {
    playlist,
    dragControls: {
      onDragStart,
      onDragOver,
      onDragDrop,
    },
    playlistControls: {
      onToggleDibs,
      onSelectMusic,
    },
    isIncludeDjPlaylist,
  };
}

export default usePlaylist;
