import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const SearchFormWrapper = styled.form`
  display: flex;
  position: relative;
  width: 30vw;
  /* min-width: 300px; */

  margin-bottom: 50px;
  overflow: hidden;
`;

const InputBox = styled.input`
  border: 0;
  outline: none;
  color: #8b7d77;
  color: black;
  background: white;
  width: 100%;
  height: 100%;
  padding: 14px 20px;
  font-size: 15px;
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.converseColor};
  svg {
    color: ${({ theme }) => theme.header};
  }

  &:hover {
    opacity: 0.5;
  }
`;

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
