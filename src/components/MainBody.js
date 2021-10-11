import React from 'react';
import styled from 'styled-components';
import SearchFormContainer from '../containers/SearchFormContainer';
import SearchResultContainer from '../containers/SearchResultContainer';

const MainBodyContainer = styled.main`
  margin-top: calc(100px);
  padding: 0 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  // debug
  height: 100vh;
`;

function MainBody() {
  return (
    <MainBodyContainer>
      <SearchFormContainer />
      <SearchResultContainer />
    </MainBodyContainer>
  );
}

export default MainBody;
