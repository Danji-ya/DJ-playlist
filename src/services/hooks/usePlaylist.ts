import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { playlistState } from '@store/playlistState';
import { playerState } from '@store/playerState';
import useToast from '@services/hooks/useToast';
import { MESSAGE } from '@constants/messages';
import { Music } from '@typings/music';
import { isEmptyObj } from '@utils/common';

interface UsePlaylistReturn {
  playlist: Music[];
  onToggleDibs: (music: Music) => void;
  onSelectMusic: (selectedMusic: Music) => void;
  onPlaylistDrop: (
    sourceElement: HTMLLIElement,
    targetElement: HTMLLIElement,
  ) => void;
  isIncludeDjPlaylist: (music: Music) => boolean;
}

function usePlaylist(): UsePlaylistReturn {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const setPlayer = useSetRecoilState(playerState);
  const toast = useToast();

  const isIncludeDjPlaylist = (music: Music) =>
    !isEmptyObj(music) &&
    playlist.filter((item: Music) => item.videoId === music.videoId).length > 0;

  const deleteMusicFromDjPlaylist = (music: Music) => {
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

  const addMusicFromDjPlaylist = (music: Music) => {
    const newPlaylist = [{ ...music }, ...playlist];
    toast({
      title: '',
      message: MESSAGE.ADD_MUSIC_SUCCESS,
    });
    return newPlaylist;
  };

  const onToggleDibs = (music: Music) => {
    const newPlaylist = isIncludeDjPlaylist(music)
      ? deleteMusicFromDjPlaylist(music)
      : addMusicFromDjPlaylist(music);
    setPlaylist(newPlaylist);
  };

  const onSelectMusic = (selectedMusic: Music) => {
    setPlayer((prev) => ({
      ...prev,
      selectedMusic,
    }));
  };

  const onPlaylistDrop = useCallback(
    (sourceElement: HTMLLIElement, targetElement: HTMLLIElement) => {
      const sourceIndex = Number(sourceElement.dataset.idx);
      const targetIndex = Number(targetElement.dataset.idx);

      if (
        sourceIndex == null ||
        targetIndex == null ||
        sourceIndex === targetIndex
      )
        return;

      const newPlaylist = [...playlist];
      const temp = newPlaylist[targetIndex];
      newPlaylist[targetIndex] = newPlaylist[sourceIndex];
      newPlaylist[sourceIndex] = temp;

      setPlaylist(newPlaylist);
    },
    [playlist, setPlaylist],
  );

  return {
    playlist,
    onToggleDibs,
    onSelectMusic,
    onPlaylistDrop,
    isIncludeDjPlaylist,
  };
}

export default usePlaylist;
