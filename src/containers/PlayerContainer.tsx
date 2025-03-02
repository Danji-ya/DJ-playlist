import { useRecoilState, useRecoilValue } from 'recoil';
import { MESSAGE } from '@constants/messages';
import useToast from '@services/hooks/useToast';
import { playerState } from '@store/playerState';
import { playlistState } from '@store/playlistState';
import { isEmptyObj } from '@utils/common';
import { IMusic } from '@typings/music';
import PlayerControlContainer from './PlayerControlContainer';

function PlayerContainer() {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const player = useRecoilValue(playerState);
  const toast = useToast();
  const { selectedMusic, shuffle } = player;

  const isIncludeDjPlaylist =
    !isEmptyObj(selectedMusic) &&
    playlist.filter((item: IMusic) => item.videoId === selectedMusic.videoId)
      .length > 0;

  function deleteMusicFromDjPlaylist(music: IMusic) {
    const newPlaylist = playlist.filter(
      (item) => item.videoId !== music.videoId,
    );
    toast({
      type: 'error',
      title: '',
      message: MESSAGE.DELETE_MUSIC_SUCCESS,
    });

    return newPlaylist;
  }

  function addMusicFromDjPlaylist(music: IMusic) {
    // 1 level deep copy
    const newPlaylist = [{ ...music }, ...playlist];
    toast({
      title: '',
      message: MESSAGE.ADD_MUSIC_SUCCESS,
    });

    return newPlaylist;
  }

  const handleDjPlaylist = (music: IMusic) => {
    let newPlaylist: IMusic[];
    if (isIncludeDjPlaylist) newPlaylist = deleteMusicFromDjPlaylist(music);
    else newPlaylist = addMusicFromDjPlaylist(music);

    setPlaylist(newPlaylist);
  };

  return (
    <PlayerControlContainer
      shuffle={shuffle}
      dibs={isIncludeDjPlaylist}
      selectedMusic={selectedMusic}
      playlist={playlist}
      handleDjPlaylist={handleDjPlaylist}
    />
  );
}

export default PlayerContainer;
