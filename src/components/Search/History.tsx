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

  const handleKeyword = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
    keyword: string,
  ) => {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' && (e as React.KeyboardEvent).key === 'Enter')
    ) {
      onSearchKeywordChange(keyword);
    }
  };

  const handleDelete = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' && (e as React.KeyboardEvent).key === 'Enter')
    ) {
      onDeleteSearchHistory(idx);
    }
  };

  return (
    <Styled.HistoryContainer isShow={isShow}>
      <Styled.Title>Recent Searches</Styled.Title>
      {searchHistory &&
        searchHistory.map((keyword, idx) => (
          <Styled.List key={`${keyword}-${idx}`}>
            <Styled.KeywordBtn
              onClick={(e) => handleKeyword(e, keyword)}
              onKeyDown={(e) => handleKeyword(e, keyword)}
              aria-label={`Search for ${keyword}`}
            >
              {keyword}
            </Styled.KeywordBtn>
            <Styled.CloseBtn
              onClick={(e) => handleDelete(e, idx)}
              onKeyDown={(e) => handleDelete(e, idx)}
              aria-label={`Remove ${keyword} from search history`}
            >
              <icons.Close />
            </Styled.CloseBtn>
          </Styled.List>
        ))}
    </Styled.HistoryContainer>
  );
}

export default History;
