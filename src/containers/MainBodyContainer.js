import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainBody from '../components/MainBody';
import { setSelectedMusic, swapDjplaylist } from '../store/modules/music';

function MainBodyContainer() {
  const djPlaylist = useSelector(state => state.music.djPlaylist);
  const dispatch = useDispatch();
  const handleSelectMusic = music => {
    dispatch(setSelectedMusic(music));
  };
  const handleSwapDjplayList = route => {
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
