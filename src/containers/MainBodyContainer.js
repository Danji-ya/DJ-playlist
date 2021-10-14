import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainBody from '../components/MainBody';
import { setSelectedMusic } from '../store/modules/music';

function MainBodyContainer() {
  const djPlaylist = useSelector(state => state.music.djPlaylist);
  const dispatch = useDispatch();
  const handleSelectMusic = music => {
    dispatch(setSelectedMusic(music));
  };

  return <MainBody djPlaylist={djPlaylist} handleSelectMusic={handleSelectMusic} />;
}

export default MainBodyContainer;
