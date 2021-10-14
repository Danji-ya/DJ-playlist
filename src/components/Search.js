import React from 'react';
import styled from 'styled-components';
import SearchTopWordContainer from '../containers/SearchTopWordContainer';
import SearchFormContainer from '../containers/SearchFormContainer';
import SearchResultContainer from '../containers/SearchResultContainer';

const SearchBodyContainer = styled.main`
  margin-left: 250px;
  margin-bottom: 80px;
  padding: 2vh 50px;
  display: flex;
  flex-direction: column;
`;

function Search() {
  return (
    <SearchBodyContainer>
      <SearchFormContainer />
      <SearchTopWordContainer />
      <SearchResultContainer />
    </SearchBodyContainer>
  );
}

export default Search;
