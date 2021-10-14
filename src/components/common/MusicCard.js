import React from 'react';
import styled from 'styled-components';
import { BsPlayCircle } from 'react-icons/bs';

const MusicCardContainer = styled.div`
  padding: 10px;
  border-radius: 15px;
  width: 250px;

  background: ${({ theme }) => theme.bodySecondary};
  margin: 10px;
`;

const MusicCardProfileImg = styled.div`
  position: relative;
  display: flex;

  img {
    width: 100%;
    height: 200px;
  }

  cursor: pointer;

  &:hover {
    img {
      filter: brightness(0.31);
    }

    button {
      visibility: visible;
    }
  }
`;

const MusicCardPlayTitle = styled.p`
  font-weight: bolder;
  font-size: 0.9rem;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
  overflow: hidden;
  margin: 7px 0;
`;

const MusicCardPlaySubtitle = styled.p`
  font-weight: lighter;
  color: gray;
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 5px 0;
`;

const MusicCardPlayButtonWrapper = styled.button`
  position: absolute;
  visibility: hidden;
  outline: none;
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;

function MusicCard({ item, handleSelectMusic }) {
  return (
    <MusicCardContainer>
      <MusicCardProfileImg onClick={() => handleSelectMusic(item)}>
        <img src={item.url} alt="thumbnail" />
        <MusicCardPlayButtonWrapper>
          <BsPlayCircle size={45} />
        </MusicCardPlayButtonWrapper>
      </MusicCardProfileImg>

      <MusicCardPlayTitle>{item.title}</MusicCardPlayTitle>
      <MusicCardPlaySubtitle>{item.subtitle}</MusicCardPlaySubtitle>
    </MusicCardContainer>
  );
}

export default MusicCard;
