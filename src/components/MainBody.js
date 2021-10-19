import React from 'react';
import MusicCard from './common/MusicCard';
import { images } from '../constants';
import Sidebar from './common/Sidebar';
import { DjplayContainer, MainBodyContainer, PlaylistTitleWrapper } from '../styles/mainBodyStyle';

function MainBody({ djPlaylist, handleSelectMusic }) {
  return (
    <MainBodyContainer>
      <Sidebar />
      <PlaylistTitleWrapper>
        <img src={images.logo.default} alt="" />
      </PlaylistTitleWrapper>

      <DjplayContainer>
        {djPlaylist.map(item => (
          <MusicCard item={item} handleSelectMusic={handleSelectMusic} key={item.videoId} />
        ))}
      </DjplayContainer>
    </MainBodyContainer>
  );
}

export default MainBody;
