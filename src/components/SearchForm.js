import React from 'react';
import styled from 'styled-components';
import { icons } from '../constatns';
import { Icon } from '../styles/headerStyle';

const SearchFormWrapper = styled.form`
  display: flex;
  position: relative;
  border: 1px solid #ffcc44;
  width: 30vw;
  min-width: 300px;
  border-radius: 3px;
  margin-bottom: 50px;
`;

const InputBox = styled.input`
  border: 0;
  outline: none;
  color: #8b7d77;
  background: white;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  border-radius: 3px;
  font-size: 15px;
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  background: #ffcc44;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

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
        <Icon src={icons.searchW.default} />
      </BtnWrapper>
    </SearchFormWrapper>
  );
}

export default SearchForm;
