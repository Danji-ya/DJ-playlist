import styled from 'styled-components';
import { DEVICE } from '../../constants/device';
import { SLIDER } from '../../constants/slider';

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

  @media ${DEVICE.TABLET} {
    transform: ${({ position }) => `translateX(calc(-50%*${position}))`};
  }

  @media screen and (max-width: ${'550px'}) {
    transform: ${({ position }) => `translateX(calc(-100%*${position}))`};
  }
`;

const AlbumWrapper = styled.li`
  display: flex;
  flex-shrink: 0;
  padding: 0 1rem;
  width: ${SLIDER.DEFAULT_WIDTH};

  @media ${DEVICE.TABLET} {
    width: 50%;
  }

  @media screen and (max-width: ${'550px'}) {
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

const SliderBtn = styled.button`
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

  &:focus {
    opacity: 1;
  }
`;

const PrevBtn = styled(SliderBtn)`
  margin-left: 2px;
`;

const NextBtn = styled(SliderBtn)`
  margin-right: 2px;
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

export default {
  SliderHeader,
  SliderContent,
  SliderItemsContainer,
  ControlContainer,
  AlbumWrapper,
  AlbumBtn,
  AlbumImgWrapper,
  AlbumImg,
  AlbumTitle,
  SliderBtn,
  PrevBtn,
  NextBtn,
};
