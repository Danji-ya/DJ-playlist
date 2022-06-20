import { useRecoilState, useRecoilValue } from 'recoil';
import { IMusic } from '../@types/music';
import { MESSAGE } from '../constants/messages';
import useToast from '../services/hooks/useToast';
import { playerState } from '../store/playerState';
import { playlistState } from '../store/playlistState';
import { isEmptyObj } from '../utils/common';
import PlayerControlContainer from './PlayerControlContainer';

function PlayerContainer() {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const player = useRecoilValue(playerState);
  const toast = useToast();
  const { selectedMusic, shuffle } = player;

  const isIncludeDjplaylist =
    !isEmptyObj(selectedMusic) &&
    playlist.filter((item: IMusic) => item.videoId === selectedMusic.videoId)
      .length > 0;

  const handleDjplaylist = (music: IMusic) => {
    let newPlaylist: IMusic[];
    if (isIncludeDjplaylist) {
      newPlaylist = playlist.filter((item) => item.videoId !== music.videoId);
      toast({
        type: 'error',
        title: '',
        message: MESSAGE.DELETE_MUSIC_SUCCESS,
      });
    } else {
      // 1 level deep copy
      newPlaylist = [{ ...music }, ...playlist];
      toast({
        title: '',
        message: MESSAGE.ADD_MUSIC_SUCCESS,
      });
    }

    setPlaylist(newPlaylist);
  };

  return (
    <PlayerControlContainer
      shuffle={shuffle}
      dibs={isIncludeDjplaylist}
      selectedMusic={selectedMusic}
      handleDjplaylist={handleDjplaylist}
    />
  );
}

export default PlayerContainer;
