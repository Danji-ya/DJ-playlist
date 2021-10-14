import styled, { css } from 'styled-components';

const SliderContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-weight: 600;
  padding: 10px 0;
`;

const MusicListContainer = styled.div`
  display: flex;
  padding: 20px 0;
  width: ${({ imgTotalWidth }) => `${imgTotalWidth}px`};
  margin-left: ${({ position }) => `-${position}px`};
  transition: margin 0.5s;
`;

const AlbumWrapper = styled.div`
  width: 250px;
  margin: 0 15px;
  border-radius: 10px;
  background: ${({ theme }) => theme.bodySecondary};
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const AlbumImgWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

const AlbumImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AlbumTitle = styled.p`
  padding: 15px 8px;
  font-weight: 600;
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
  color: white;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: rgba(165, 165, 165, 0.3);
  }
`;

const PrevBtn = styled(SliderBtns)`
  ${SliderBtns};
  top: 20px;
  right: 50px;
`;

const NextBtn = styled(SliderBtns)`
  ${SliderBtns};
  top: 20px;
  right: 8px;
`;

const SearchResultContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const SearchResultGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  align-self: center;

  gap: 30px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SearchResultTitle = styled.h2`
  font-weight: 600;
  padding: 20px 0;
`;

export {
  SliderContainer,
  Title,
  MusicListContainer,
  AlbumWrapper,
  AlbumImgWrapper,
  AlbumImg,
  AlbumTitle,
  SliderBtns,
  PrevBtn,
  NextBtn,
  SearchResultContainer,
  SearchResultGrid,
  SearchResultTitle,
};
