import { useRecoilState, useSetRecoilState } from 'recoil';
import { IMusic, ISwapRoute } from '../@types/music';
import MainBody from '../components/MainBody';
import { playerState } from '../store/playerState';
import { playlistState } from '../store/playlistState';

function MainBodyContainer() {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const setPlayer = useSetRecoilState(playerState);

  const handleSelectMusic = (selectedMusic: IMusic) => {
    setPlayer((prev) => ({
      ...prev,
      selectedMusic,
    }));
  };

  const handleSwapDjplayList = (route: ISwapRoute) => {
    const { oriIdx, desIdx } = route || {};
    if (oriIdx == null || desIdx == null) return;

    const newPlaylist = [...playlist];

    const temp = newPlaylist[desIdx];
    newPlaylist[desIdx] = newPlaylist[oriIdx];
    newPlaylist[oriIdx] = temp;

    setPlaylist(newPlaylist);
  };

  return (
    <MainBody
      djPlaylist={playlist}
      handleSelectMusic={handleSelectMusic}
      handleSwapDjplayList={handleSwapDjplayList}
    />
  );
}

export default MainBodyContainer;
