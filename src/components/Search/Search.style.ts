import styled from 'styled-components';
import { DEVICE } from '../../constants/device';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 30vw;
  min-width: 250px;
  max-width: 400px;

  @media ${DEVICE.DESKTOP} {
    align-self: center;
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
`;

const BtnWrapper = styled.div`
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

  &:hover {
    opacity: 0.5;
  }
`;

const HistoryContainer = styled.ul<{ isShow: boolean }>`
  position: absolute;
  width: 100%;
  top: 50px;
  padding: 8px;
  border-radius: 4px;
  background-color: #fff;
  color: black;
  border: 1px solid #dbdbdb;
  box-shadow: 0 4px 6px 0 rgb(82 91 97 / 18%);
  z-index: 10;

  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
`;

const List = styled.li`
  position: relative;
  padding: 9px 5px;
  border-radius: 4px;
  font-size: 15px;

  &:hover {
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
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &:hover {
    cursor: pointer;
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

export default {
  Container,
  SearchFormWrapper,
  InputBox,
  BtnWrapper,
  HistoryContainer,
  List,
  CloseBtn,
  Title,
  SearchResultSection,
  SearchResultContainer,
  SearchResultGrid,
  SearchResultTitle,
  SearchResultEmptyWrapper,
  CatFaceIcon,
  SearchResultEmptyText,
};
