import { useRecoilState, useRecoilValue } from 'recoil';
import { IMusic } from '../@types/music';
import { playerState } from '../store/playerState';
import { playlistState } from '../store/playlistState';
import PlayerControlContainer from './PlayerControlContainer';

function PlayerContainer() {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const player = useRecoilValue(playerState);
  const { selectedMusic } = player;

  const isIncludeDjplaylist =
    Object.keys(selectedMusic).length !== 0 &&
    playlist.filter((item: IMusic) => item.videoId === selectedMusic.videoId)
      .length > 0;

  const handleDjplaylist = (music: IMusic) => {
    let newPlaylist: IMusic[];
    if (isIncludeDjplaylist) {
      newPlaylist = playlist.filter((item) => item.videoId !== music.videoId);
    } else {
      // 1 level deep copy
      newPlaylist = [{ ...music }, ...playlist];
    }

    setPlaylist(newPlaylist);
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
