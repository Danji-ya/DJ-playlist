import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { LabelA11Y } from '@styles/common';
import icons from '@constants/icons';
import { ISearchKeyword } from '@typings/search';
import History from './History';
import Styled from './Search.style';

interface Props {
  keyword: string;
  searchHistory: string[];
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
  delSearchHistory: (idx: number) => void;
}

export interface ModalHandle {
  handleQuery: (value: string) => void;
}

const Form = React.forwardRef<ModalHandle, Props>(
  ({ keyword, searchHistory, handleSearchKeyword, delSearchHistory }, ref) => {
    const [query, setQuery] = useState(keyword);
    const [isActiveHistory, activeHistory] = useState(false);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleChange = (value: string) => {
      setQuery(value);
    };

    useImperativeHandle(ref, () => ({
      handleQuery(value) {
        setQuery(value);
      },
    }));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (query.length === 0) return;
      if (keyword === query) return;

      const trimmedValue = query.trim();
      handleSearchKeyword({ value: trimmedValue });
    };

    const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
      if (inputRef.current?.contains(e.relatedTarget)) return;

      activeHistory(false);
    };

    useEffect(() => {
      const handleOutOfRange = (e: MouseEvent) => {
        if (inputRef.current?.contains(e.target as Node)) return;
        activeHistory(false);
      };

      window.addEventListener('mousedown', handleOutOfRange);

      return () => {
        window.removeEventListener('mousedown', handleOutOfRange);
      };
    }, []);

    return (
      <Styled.Container ref={inputRef} onBlur={handleBlur}>
        <Styled.SearchFormWrapper autoComplete="off" onSubmit={handleSubmit}>
          <LabelA11Y htmlFor="searchInput">검색창</LabelA11Y>
          <Styled.InputBox
            id="searchInput"
            type="text"
            placeholder="검색어를 입력해주세요"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => activeHistory(true)}
          />
          <Styled.BtnWrapper type="submit" aria-label="search button">
            <icons.Search />
          </Styled.BtnWrapper>
        </Styled.SearchFormWrapper>
        <History
          handleSearchKeyword={handleSearchKeyword}
          delSearchHistory={delSearchHistory}
          searchHistory={searchHistory}
          isShow={isActiveHistory && query === ''}
        />
      </Styled.Container>
    );
  },
);

export default Form;
