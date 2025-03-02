/* eslint-disable react/no-array-index-key */
import React from 'react';
import icons from '@constants/icons';
import Styled from './Search.style';
import { ISearchKeyword } from '../../@types/search';

interface Props {
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
  delSearchHistory: (idx: number) => void;
  searchHistory: string[];
  isShow: boolean;
}

function History({
  handleSearchKeyword,
  delSearchHistory,
  searchHistory,
  isShow,
}: Props) {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    keyword: string,
  ) => {
    handleSearchKeyword({ value: keyword, isAutoKeyword: true });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    keyword: string,
  ) => {
    if (e.key !== 'Enter') return;
    handleSearchKeyword({ value: keyword, isAutoKeyword: true });
  };

  const handleClose = (idx: number) => {
    delSearchHistory(idx);
  };

  return (
    <Styled.HistoryContainer isShow={isShow}>
      <Styled.Title>최근 검색어</Styled.Title>
      {searchHistory &&
        searchHistory.map((keyword, idx) => (
          <Styled.List key={`${keyword}-${idx}`}>
            <Styled.KeywordBtn
              onClick={(e) => handleClick(e, keyword)}
              onKeyDown={(e) => handleKeyDown(e, keyword)}
            >
              {keyword}
            </Styled.KeywordBtn>
            <Styled.CloseBtn
              onClick={() => handleClose(idx)}
              aria-label="close"
            >
              <icons.Close />
            </Styled.CloseBtn>
          </Styled.List>
        ))}
    </Styled.HistoryContainer>
  );
}

export default History;
