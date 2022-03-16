import styled from 'styled-components';
import { DEVICE, SIZE } from '../constants/device';

const SearchBodyContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: ${SIZE.MIN_MOBILE};
  margin-left: 250px;
  min-height: 100vh;
  padding-bottom: 80px;

  @media ${DEVICE.DESKTOP} {
    margin-left: 0;
    padding-top: 80px;
  }

  @media ${DEVICE.MOBILE} {
    padding-top: 0;
  }
`;

const SearchBody = styled.div`
  margin: 2vh 50px;
`;

const SliderContainer = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-weight: 600;
  padding: 10px 0;
`;

const MusicListContainer = styled.ul<{
  position: number;
}>`
  position: relative;
  display: flex;
  transition: all 0.3s ease;
  margin: 15px 0;
  transform: ${({ position }) => `translateX(calc(-33.4%*${position}))`};

  @media ${DEVICE.TABLET} {
    transform: ${({ position }) => `translateX(calc(-50%*${position}))`};
  }

  @media ${DEVICE.MOBILE} {
    transform: ${({ position }) => `translateX(calc(-100%*${position}))`};
  }
`;

const AlbumWrapper = styled.li`
  flex-shrink: 0;
  padding: 0 1rem;
  width: 33.4%;

  @media ${DEVICE.TABLET} {
    width: 50%;
  }

  @media ${DEVICE.MOBILE} {
    width: 100%;
  }
`;

const AlbumDiv = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.cardBg};
  overflow: hidden;

  border: ${({ theme }) => `1px solid ${theme.border}`};
  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const AlbumImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const AlbumImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 3s cubic-bezier(0.175, 0.885, 0, 1);
`;

const AlbumTitle = styled.p`
  padding: 15px 8px;
  font-weight: 600;
  font-size: 0.9rem;
`;

const SliderBtns = styled.button`
  position: absolute;
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  border: none;
  font-size: 1rem;
  background: ${({ theme }) => theme.searchBtn};
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const PrevBtn = styled(SliderBtns)`
  ${SliderBtns};
  top: 20px;
  right: 40px;
`;

const NextBtn = styled(SliderBtns)`
  ${SliderBtns};
  top: 20px;
  right: 0;
`;

const SearchResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 270px;
  min-height: 350px;
`;

const SearchResultGrid = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  width: 80%;
  min-height: 300px;
`;

const SearchResultTitle = styled.h2`
  font-weight: 600;
  padding: 20px 0;
`;

const SearchResultEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CatFaceIcon = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 15px;
  margin-bottom: 15px;
`;
const SearchResultEmptyText = styled.p`
  font-size: 1rem;
`;

export {
  SearchBodyContainer,
  SearchBody,
  SliderContainer,
  Title,
  MusicListContainer,
  AlbumWrapper,
  AlbumDiv,
  AlbumImgWrapper,
  AlbumImg,
  AlbumTitle,
  SliderBtns,
  PrevBtn,
  NextBtn,
  SearchResultContainer,
  SearchResultGrid,
  SearchResultTitle,
  SearchResultEmptyWrapper,
  CatFaceIcon,
  SearchResultEmptyText,
};
