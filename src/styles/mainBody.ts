import styled from 'styled-components';
import { DEVICE, SIZE } from '../constants/device';

const MainBodyContainer = styled.main`
  position: relative;
  margin-left: 250px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICE.DESKTOP} {
    margin-left: 0;
    margin-top: 80px;
  }
`;

const DjplayContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1rem;
  width: 60vw;

  @media ${DEVICE.DESKTOP} {
    width: 70vw;
    min-width: ${SIZE.MOBILE};
  }
`;

const PlaylistTitleWrapper = styled.div`
  width: 65px;
  height: 65px;
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

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
`;

const EmptyImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 25px;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'BMHANNAPro', sans-serif;
`;

export {
  MainBodyContainer,
  DjplayContainer,
  PlaylistTitleWrapper,
  EmptyContainer,
  EmptyImg,
  EmptyTitle,
};
