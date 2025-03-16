import { useCallback, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Playlist from '@components/Playlist';
import { playerState } from '@store/playerState';
import { playlistState } from '@store/playlistState';
import { IMusic, ISwapRoute } from '@typings/music';

function PlaylistContainer() {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const setPlayer = useSetRecoilState(playerState);
  const startEl = useRef<any>(null);

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
    startEl.current = e.target;
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

  return (
    <Playlist
      djPlaylist={playlist}
      onSelectMusic={onSelectMusic}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragDrop={onDragDrop}
    />
  );
}

export default PlaylistContainer;
