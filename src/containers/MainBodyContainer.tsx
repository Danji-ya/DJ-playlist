import { IMusic, ISwapRoute } from '../@types/music';
import MainBody from '../components/MainBody';
import { useAppDispatch, useAppSelector } from '../store';
import { setSelectedMusic, swapDjplaylist } from '../store/modules/music';

function MainBodyContainer() {
  const djPlaylist = useAppSelector((state) => state.music.djPlaylist);
  const dispatch = useAppDispatch();
  const handleSelectMusic = (music: IMusic) => {
    dispatch(setSelectedMusic(music));
  };
  const handleSwapDjplayList = (route: ISwapRoute) => {
    dispatch(swapDjplaylist(route));
  };

  return (
    <MainBody
      djPlaylist={djPlaylist}
      handleSelectMusic={handleSelectMusic}
      handleSwapDjplayList={handleSwapDjplayList}
    />
  );
}

export default MainBodyContainer;
