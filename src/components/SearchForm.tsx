import React, { useImperativeHandle, useState } from 'react';
import {
  Container,
  BtnWrapper,
  InputBox,
  SearchFormWrapper,
} from '../styles/searchForm';
import Search from '../assets/icons/search.svg';
import SearchHistory from './common/SearchHistory';

interface Props {
  keyword: string;
  serachHistory: string[];
  handleSearchKeyword: (value: string, isAutoKeyword?: boolean) => void;
  delSearchHistory: (idx: number) => void;
}

interface ModalHandle {
  handleQuery: (value: string) => void;
}

const SearchForm = React.forwardRef<ModalHandle, Props>(
  ({ keyword, serachHistory, handleSearchKeyword, delSearchHistory }, ref) => {
    const [query, setQuery] = useState(keyword);
    const [inputFocus, setInputFocus] = useState<boolean>(false);

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

      handleSearchKeyword(query);
    };

    return (
      <Container>
        <SearchFormWrapper onSubmit={(e) => handleSubmit(e)}>
          <InputBox
            type="text"
            placeholder="검색어를 입력해주세요"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
          <BtnWrapper onClick={(e) => handleSubmit(e)}>
            <Search />
          </BtnWrapper>
        </SearchFormWrapper>
        <SearchHistory
          handleSearchKeyword={handleSearchKeyword}
          delSearchHistory={delSearchHistory}
          serachHistory={serachHistory}
          isFocus={inputFocus}
        />
      </Container>
    );
  },
);

export default SearchForm;
