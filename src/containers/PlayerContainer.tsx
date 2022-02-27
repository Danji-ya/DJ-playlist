import { IMusic } from '../@types/music';
import { useAppDispatch, useAppSelector } from '../store';
import { addDjplaylist, deleteDjplaylist } from '../store/modules/music';
import PlayerControlContainer from './PlayerControlContainer';

function PlayerContainer() {
  const dispatch = useAppDispatch();
  const selectedMusic = useAppSelector((state) => state.music.selectedMusic);
  const djPlaylist = useAppSelector((state) => state.music.djPlaylist);

  const isIncludeDjplaylist =
    djPlaylist.filter((item: IMusic) => item.videoId === selectedMusic.videoId)
      .length > 0;

  const handleDjplaylist = (music: IMusic) => {
    if (isIncludeDjplaylist) {
      dispatch(deleteDjplaylist(music));
    } else {
      dispatch(addDjplaylist(music));
    }
  };

  return (
    <PlayerControlContainer
      dibs={isIncludeDjplaylist}
      selectedMusic={selectedMusic}
      handleDjplaylist={handleDjplaylist}
    />
  );
}

export default PlayerContainer;
