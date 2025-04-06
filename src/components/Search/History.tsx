/* eslint-disable react/no-array-index-key */
import React from 'react';
import icons from '@constants/icons';
import { useSearchForm } from '@contexts/SearchFormContext';
import useSearchHistory from '@services/hooks/useSearchHistory';
import Styled from './Search.style';

interface Props {
  isShow: boolean;
}

function History({ isShow }: Props) {
  const {
    searchControls: { onSearchKeywordChange },
  } = useSearchForm();
  const { searchHistory, onDeleteSearchHistory } = useSearchHistory();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    keyword: string,
  ) => {
    onSearchKeywordChange(keyword);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    keyword: string,
  ) => {
    if (e.key !== 'Enter') return;
    onSearchKeywordChange(keyword);
  };

  const handleClose = (idx: number) => {
    onDeleteSearchHistory(idx);
  };

  return (
    <Styled.HistoryContainer isShow={isShow}>
      <Styled.Title>Recent Searches</Styled.Title>
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
