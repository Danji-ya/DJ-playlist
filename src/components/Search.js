import React from 'react';
import styled from 'styled-components';
import SearchDefaultContainer from '../containers/SearchDefaultContainer';
import SearchFormContainer from '../containers/SearchFormContainer';
import SearchResultContainer from '../containers/SearchResultContainer';

const SearchBodyContainer = styled.main`
  margin-left: 250px;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
`;

function Search() {
  return (
    <SearchBodyContainer>
      <SearchFormContainer />
      <SearchDefaultContainer />
      {/* <SearchResultContainer /> */}
    </SearchBodyContainer>
  );
}

export default Search;
