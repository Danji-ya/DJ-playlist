import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnWrapper, InputBox, SearchFormWrapper } from '../styles/searchformStyle';

function SearchForm({ keyword, handleSubmit, handleChange }) {
  return (
    <SearchFormWrapper onSubmit={e => handleSubmit(e)}>
      <InputBox
        type="text"
        placeholder="검색어를 입력해주세요"
        value={keyword}
        onChange={e => handleChange(e.target.value)}
      />
      <BtnWrapper onClick={e => handleSubmit(e)}>
        <FiSearch size={22} />
      </BtnWrapper>
    </SearchFormWrapper>
  );
}

export default SearchForm;
