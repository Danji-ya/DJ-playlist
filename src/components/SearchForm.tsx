import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { icons } from '../constants';
import {
  Container,
  BtnWrapper,
  InputBox,
  SearchFormWrapper,
} from '../styles/searchForm';
import SearchHistory from './common/SearchHistory';

interface Props {
  keyword: string;
  serachHistory: string[];
  handleSearchKeyword: (value: string, isAutoKeyword?: boolean) => void;
  delSearchHistory: (idx: number) => void;
}

export interface ModalHandle {
  handleQuery: (value: string) => void;
}

const SearchForm = React.forwardRef<ModalHandle, Props>(
  ({ keyword, serachHistory, handleSearchKeyword, delSearchHistory }, ref) => {
    const [query, setQuery] = useState(keyword);
    const [isShow, setIsShow] = useState(false);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleChange = (value: string) => {
      setQuery(value);
    };

    useImperativeHandle(ref, () => ({
      handleQuery(value) {
        setQuery(value);
      },
    }));

    const handleSubmit = (
      e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>,
    ) => {
      e.preventDefault();
      if (query.length === 0) return;
      if (keyword === query) return;

      const trimedValue = query.trim();
      handleSearchKeyword(trimedValue);
    };

    useEffect(() => {
      const handleOutofRange = (e: MouseEvent) => {
        if (!inputRef.current?.contains(e.target as Node)) {
          setIsShow(false);
        }
      };

      window.addEventListener('mousedown', handleOutofRange);

      return () => {
        window.removeEventListener('mousedown', handleOutofRange);
      };
    }, []);

    return (
      <Container ref={inputRef}>
        <SearchFormWrapper onSubmit={(e) => handleSubmit(e)}>
          <InputBox
            type="text"
            placeholder="검색어를 입력해주세요"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsShow(true)}
          />
          <BtnWrapper
            onClick={(e) => handleSubmit(e)}
            aria-label="search button"
          >
            <icons.Search />
          </BtnWrapper>
        </SearchFormWrapper>
        <SearchHistory
          handleSearchKeyword={handleSearchKeyword}
          delSearchHistory={delSearchHistory}
          serachHistory={serachHistory}
          isShow={isShow && query === ''}
        />
      </Container>
    );
  },
);

export default SearchForm;
