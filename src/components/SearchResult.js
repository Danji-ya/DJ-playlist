import React from 'react';
import styled from 'styled-components';
import { getInitTheme } from '../util/utils';

const SearchResultContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchResultGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  > div {
    width: 250px;
    height: 250px;
    background: #ffcc44;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function SearchResult() {
  getInitTheme();
  return (
    <SearchResultContainer>
      <SearchResultGrid>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </SearchResultGrid>
    </SearchResultContainer>
  );
}

export default SearchResult;
