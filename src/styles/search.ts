import styled from 'styled-components';
import { DEVICE, SIZE } from '../constants/device';
import { SLIDER } from '../constants/slider';

const SearchBodyContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: ${SIZE.MIN_MOBILE};
  max-width: 1400px;
  min-height: 100vh;
  padding-bottom: 80px;
  padding-left: 250px;
  margin: 0 auto;

  @media ${DEVICE.DESKTOP} {
    padding-left: 0;
    padding-top: 80px;
  }

  @media ${DEVICE.MOBILE} {
    padding-top: 0;
  }
`;

const SearchBody = styled.div`
  margin: 2vh 50px;
`;

const Container = styled.section`
  position: relative;
  overflow: hidden;
`;

const SliderHeader = styled.h3`
  margin-top: 50px;
  font-weight: 600;
  padding: 10px 0;
`;

const SliderContent = styled.div`
  position: relative;

  &:hover {
    button {
      opacity: 1;
    }
  }

  @media ${DEVICE.MAX_MOBILE} {
    button {
      opacity: 1;
    }
  }
`;

const SliderItemsContainer = styled.ul<{ position: number }>`
  display: flex;
  transition: all 0.3s ease;
  margin: 15px 0;
  transform: ${({ position }) =>
    `translateX(calc(-${SLIDER.DEFAULT_WIDTH}*${position}))`};

  @media screen and (max-width: ${'820px'}) {
    transform: ${({ position }) => `translateX(calc(-50%*${position}))`};
  }

  @media screen and (max-width: ${'600px'}) {
    transform: ${({ position }) => `translateX(calc(-100%*${position}))`};
  }
`;

const AlbumWrapper = styled.li`
  flex-shrink: 0;
  padding: 0 1rem;
  width: ${SLIDER.DEFAULT_WIDTH};

  @media screen and (max-width: ${'820px'}) {
    width: 50%;
  }

  @media screen and (max-width: ${'600px'}) {
    width: 100%;
  }
  display: flex;
`;

const AlbumDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${({ theme }) => theme.cardBg};
  border: ${({ theme }) => `1px solid ${theme.border}`};
  overflow: hidden;

  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const AlbumImgWrapper = styled.div`
  flex-grow: 1;
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
  font-weight: 600;
  font-size: 0.85rem;
  margin: 4% 2%;
`;

const SliderBtns = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 1rem;
  background: ${({ theme }) => theme.searchBtn};
  color: white;
  opacity: 0;
  pointer-events: visible;
  cursor: pointer;

  &:hover::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.2;
    background: #222222;
  }
`;

const PrevBtn = styled(SliderBtns)`
  ${SliderBtns};
`;

const NextBtn = styled(SliderBtns)`
  ${SliderBtns};
`;

const SearchResultSection = styled.section``;

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
`;

const SearchResultGrid = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  min-height: 300px;

  width: 80%;

  @media ${DEVICE.MOBILE} {
    width: 100%;
  }
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

const ControlContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export {
  SearchBodyContainer,
  SearchBody,
  Container,
  SliderHeader,
  SliderContent,
  SliderItemsContainer,
  ControlContainer,
  AlbumWrapper,
  AlbumDiv,
  AlbumImgWrapper,
  AlbumImg,
  AlbumTitle,
  SliderBtns,
  PrevBtn,
  NextBtn,
  SearchResultSection,
  SearchResultContainer,
  SearchResultGrid,
  SearchResultTitle,
  SearchResultEmptyWrapper,
  CatFaceIcon,
  SearchResultEmptyText,
};
