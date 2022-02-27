import React from 'react';
import { BtnWrapper, InputBox, SearchFormWrapper } from '../styles/searchForm';
import Search from '../assets/icons/search.svg';

interface Props {
  keyword: string;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>,
  ) => void;
  handleChange: (value: string) => void;
}

function SearchForm({ keyword, handleSubmit, handleChange }: Props) {
  return (
    <SearchFormWrapper onSubmit={(e) => handleSubmit(e)}>
      <InputBox
        type="text"
        placeholder="검색어를 입력해주세요"
        value={keyword}
        onChange={(e) => handleChange(e.target.value)}
      />
      <BtnWrapper onClick={(e) => handleSubmit(e)}>
        <Search />
      </BtnWrapper>
    </SearchFormWrapper>
  );
}

export default SearchForm;
