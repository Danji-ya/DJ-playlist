import styled, { css } from 'styled-components';

const SearchBodyContainer = styled.main`
  position: relative;
  margin-left: 250px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 80px;
  }
`;

const SearchBody = styled.div`
  padding: 2vh 0;
  margin: 0 50px;
`;

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
  background: ${({ theme }) => theme.cardBg};
  border: ${({ theme }) => `1px solid ${theme.border}`};
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
  color: ${({ theme }) => theme.converseColor};
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
