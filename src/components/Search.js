import React from 'react';
import SearchTopWordContainer from '../containers/SearchTopWordContainer';
import SearchFormContainer from '../containers/SearchFormContainer';
import SearchResultContainer from '../containers/SearchResultContainer';
import Sidebar from './common/Sidebar';
import { SearchBodyContainer } from '../styles/searchStyle';

function Search() {
  return (
    <SearchBodyContainer>
      <Sidebar />
      <SearchFormContainer />
      <SearchTopWordContainer />
      <SearchResultContainer />
    </SearchBodyContainer>
  );
}

export default Search;
