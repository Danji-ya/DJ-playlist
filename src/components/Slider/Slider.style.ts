import styled from 'styled-components';
import { DEVICE } from '@constants/device';
import { SLIDER } from '@constants/slider';

const SliderHeader = styled.h3`
  margin-top: 50px;
  font-weight: 600;
  padding: 10px 0;
`;

const SliderContent = styled.div`
  position: relative;
`;

const SliderMargin = styled.div`
  margin: 0 15px;
  overflow: hidden;

  @media ${DEVICE.TABLET} {
    margin: 0 5px;
  }
`;

const SliderItemsContainer = styled.ul<{ position: number }>`
  display: flex;
  transition: all 0.3s ease;
  transform: ${({ position }) =>
    `translateX(calc(-${SLIDER.DEFAULT_WIDTH}*${position}))`};

  @media ${DEVICE.TABLET} {
    transform: ${({ position }) => `translateX(calc(-50%*${position}))`};
  }

  @media ${DEVICE.MAX_MOBILE} {
    transform: ${({ position }) => `translateX(calc(-100%*${position}))`};
  }
`;

const AlbumWrapper = styled.li`
  display: flex;
  flex-shrink: 0;
  padding: 0 10px;
  width: ${SLIDER.DEFAULT_WIDTH};

  @media ${DEVICE.TABLET} {
    width: 50%;
    padding: 0 5px;
  }

  @media ${DEVICE.MAX_MOBILE} {
    width: 100%;
  }
`;

const AlbumBtn = styled.button`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${({ theme }) => theme.cardBg};
  border: ${({ theme }) => `1px solid ${theme.border}`};
  overflow: hidden;

  color: ${({ theme }) => theme.text};

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

const AlbumImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 3s cubic-bezier(0.175, 0.885, 0, 1);
`;

const AlbumTitle = styled.p`
  font-weight: 600;
  font-size: 0.85rem;
  margin: 4% 2%;

  @media ${DEVICE.TABLET} {
    font-size: 0.75rem;
  }
`;

const SliderBtn = styled.button`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1rem;
  background: ${({ theme }) => theme.searchBtn};
  color: white;
  cursor: pointer;
  z-index: 1;
  transform: translateY(-50%);

  @media ${DEVICE.TABLET} {
    width: 35px;
    height: 35px;
  }
`;

const PrevBtn = styled(SliderBtn)`
  left: 0px;
`;

const NextBtn = styled(SliderBtn)`
  right: 0px;
`;

export default {
  SliderHeader,
  SliderContent,
  SliderMargin,
  SliderItemsContainer,
  AlbumWrapper,
  AlbumBtn,
  AlbumImgWrapper,
  AlbumImg,
  AlbumTitle,
  SliderBtn,
  PrevBtn,
  NextBtn,
};
