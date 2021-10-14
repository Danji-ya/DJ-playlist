import React from 'react';
import styled from 'styled-components';
import MusicCard from './common/MusicCard';
import { images } from '../constatns';

const MainBodyContainer = styled.main`
  margin-left: 250px;
  margin-bottom: 80px;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DjplayContainer = styled.section`
  width: 100%;
  max-width: 1100px;
  min-width: 300px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: blue;
`;

const PlaylistTitleWrapper = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: white;
  position: relative;
  margin: 2vh 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function MainBody({ djPlaylist, handleSelectMusic }) {
  return (
    <MainBodyContainer>
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
