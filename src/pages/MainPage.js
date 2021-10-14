import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import MainBodyContainer from '../containers/MainBodyContainer';
import ToggleModeContainer from '../containers/ToggleModeContainer';

function MainPage() {
  return (
    <>
      <HeaderContainer />
      <ToggleModeContainer />
      <MainBodyContainer />
    </>
  );
}

export default MainPage;
