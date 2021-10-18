import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDjplaylist, deleteDjplaylist } from '../store/modules/music';
import PlayerControlContainer from './PlayerControlContainer';

function PlayerContainer() {
  const dispatch = useDispatch();
  const selectedMusic = useSelector(state => state.music.selectedMusic);
  const djPlaylist = useSelector(state => state.music.djPlaylist);

  const isIncludeDjplaylist =
    djPlaylist.filter(item => item.videoId === selectedMusic.videoId).length > 0;

  const handleDjplaylist = music => {
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
