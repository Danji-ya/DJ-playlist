import { useCallback, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IMusic, ISwapRoute } from '../@types/music';
import Playlist from '../components/Playlist';
import { playerState } from '../store/playerState';
import { playlistState } from '../store/playlistState';

function PlaylistContainer() {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const setPlayer = useSetRecoilState(playerState);
  const startEl = useRef<any>(null);

  const handleSelectMusic = (selectedMusic: IMusic) => {
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

  const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    startEl.current = e.target;
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
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
      handleSelectMusic={handleSelectMusic}
      handleDragStart={handleDragStart}
      handleDragOver={handleDragOver}
      handleDrop={handleDrop}
    />
  );
}

export default PlaylistContainer;
