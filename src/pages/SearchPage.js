import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import SearchContainer from '../containers/SearchContainer';
import ToggleModeContainer from '../containers/ToggleModeContainer';

function SearchPage() {
  return (
    <>
      <HeaderContainer />
      <ToggleModeContainer />
      <SearchContainer />
    </>
  );
}

export default SearchPage;
