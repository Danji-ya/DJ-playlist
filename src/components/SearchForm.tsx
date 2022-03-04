import React, { useImperativeHandle, useState } from 'react';
import { BtnWrapper, InputBox, SearchFormWrapper } from '../styles/searchForm';
import Search from '../assets/icons/search.svg';

interface Props {
  keyword: string;
  handleSearchKeyword: (value: string, isAutoKeyword?: boolean) => void;
}

interface ModalHandle {
  handleQuery: (value: string) => void;
}

const SearchForm = React.forwardRef<ModalHandle, Props>(
  ({ keyword, handleSearchKeyword }, ref) => {
    const [query, setQuery] = useState(keyword);

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
      <SearchFormWrapper onSubmit={(e) => handleSubmit(e)}>
        <InputBox
          type="text"
          placeholder="검색어를 입력해주세요"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        />
        <BtnWrapper onClick={(e) => handleSubmit(e)}>
          <Search />
        </BtnWrapper>
      </SearchFormWrapper>
    );
  },
);

export default SearchForm;
