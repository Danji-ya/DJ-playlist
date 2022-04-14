import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ISearchKeyword } from '../../@types/search';
import { icons } from '../../constants';
import * as Styled from '../../styles/searchForm';
import History from './History';

interface Props {
  keyword: string;
  serachHistory: string[];
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
  delSearchHistory: (idx: number) => void;
}

export interface ModalHandle {
  handleQuery: (value: string) => void;
}

const Form = React.forwardRef<ModalHandle, Props>(
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
      handleSearchKeyword({ value: trimedValue });
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
      <Styled.Container ref={inputRef}>
        <Styled.SearchFormWrapper onSubmit={(e) => handleSubmit(e)}>
          <Styled.InputBox
            type="text"
            placeholder="검색어를 입력해주세요"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsShow(true)}
          />
          <Styled.BtnWrapper
            onClick={(e) => handleSubmit(e)}
            aria-label="search button"
          >
            <icons.Search />
          </Styled.BtnWrapper>
        </Styled.SearchFormWrapper>
        <History
          handleSearchKeyword={handleSearchKeyword}
          delSearchHistory={delSearchHistory}
          serachHistory={serachHistory}
          isShow={isShow && query === ''}
        />
      </Styled.Container>
    );
  },
);

export default Form;
