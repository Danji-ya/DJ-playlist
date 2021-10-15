import React from 'react';
import styled from 'styled-components';
import MusicCard from './common/MusicCard';
import { images } from '../constatns';
import SideBar from './common/SideBar';

const MainBodyContainer = styled.main`
  position: relative;
  margin-left: 250px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DjplayContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-gap: 1rem;
  justify-content: space-around;
  width: 60vw;
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
      <SideBar />
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
