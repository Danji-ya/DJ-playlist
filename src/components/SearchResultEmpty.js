import React from 'react';
import { icons } from '../constants';
import {
  CatFaceIcon,
  SearchResultEmptyWrapper,
  SearchResultEmptyText,
} from '../styles/searchStyle';

function SearchResultEmpty() {
  return (
    <SearchResultEmptyWrapper>
      <CatFaceIcon src={icons.catFace} alt="catFace" />
      <SearchResultEmptyText>앗! 찾으시는 결과가 없네요.</SearchResultEmptyText>
    </SearchResultEmptyWrapper>
  );
}

export default SearchResultEmpty;
