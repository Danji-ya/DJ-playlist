import styled from 'styled-components';
import { DEVICE } from '@constants/device';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 30vw;
  min-width: 250px;
  max-width: 400px;
  padding: 0 16px;

  @media ${DEVICE.DESKTOP} {
    margin: 0 auto;
  }
`;

const SearchFormWrapper = styled.form`
  position: relative;
  width: 100%;
`;

const InputBox = styled.input`
  border: none;
  outline: none;
  color: black;
  background: white;
  width: 100%;
  height: 100%;
  padding: 14px 20px;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 70px;
`;

const BtnWrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.searchBtn};
  svg {
    stroke: white;
  }

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const HistoryContainer = styled.ul<{ isShow: boolean }>`
  position: absolute;
  width: 100%;
  top: 45px;
  padding: 8px;
  border: 1px solid #dbdbdb;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
  color: black;
  box-shadow: 0 4px 6px 0 rgb(82 91 97 / 18%);
  z-index: 10;

  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
`;

const List = styled.li`
  position: relative;
  font-size: 15px;
`;

const KeywordBtn = styled.button`
  width: 100%;
  padding: 10px 5px;
  background: transparent;
  text-align: left;

  &:hover,
  &:focus {
    background: #f7f8fa;
    cursor: pointer;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  cursor: pointer;
  &:hover,
  &:focus {
    path {
      fill: #757575;
    }
  }
`;

const Title = styled.h3`
  font-size: 13px;
  line-height: 23px;
  color: #757575;
`;

const SearchResultWrapper = styled.section`
  padding: 0 16px;
`;

const SearchResultGrid = styled.ul`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  justify-content: center;
  grid-gap: 3rem;
  min-height: 300px;
  padding: 0 55px;
`;

const MainTitle = styled.h3`
  font-weight: 600;
  padding: 20px 0;
`;

const SearchNoResultWrapper = styled.div`
  display: flex;
  min-height: 300px;
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
const SearchNoResultText = styled.p`
  font-size: 1rem;
`;

export default {
  Container,
  SearchFormWrapper,
  InputBox,
  BtnWrapper,
  HistoryContainer,
  List,
  KeywordBtn,
  CloseBtn,
  Title,
  SearchResultWrapper,
  SearchResultGrid,
  MainTitle,
  SearchNoResultWrapper,
  CatFaceIcon,
  SearchNoResultText,
};
