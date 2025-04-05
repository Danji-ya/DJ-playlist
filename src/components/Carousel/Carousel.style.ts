import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  margin: 16px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.searchBtn};
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.9;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
`;

const SearchItemList = styled.ul`
  display: flex;
  gap: 16px;
  width: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  margin: 0 auto;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  will-change: transform;
  overflow-x: scroll;

  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }
`;

const SearchItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  width: 220px;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: 1200px) {
    min-width: 200px;
    width: 200px;
  }

  @media (max-width: 768px) {
    min-width: 180px;
    width: 180px;
  }

  @media (max-width: 480px) {
    min-width: 160px;
    width: 160px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

const SearchItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  transform-origin: center center;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease;

  ${SearchItem}:hover & {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const SearchItemText = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SearchItemKeyword = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const SearchItemGenre = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.subText};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const Styled = {
  Container,
  Header,
  ButtonGroup,
  Button,
  CarouselWrapper,
  SearchItemList,
  SearchItem,
  ImageContainer,
  SearchItemImage,
  ImageOverlay,
  SearchItemText,
  SearchItemKeyword,
  SearchItemGenre,
};
