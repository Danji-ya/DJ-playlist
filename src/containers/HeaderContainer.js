import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/common/Header';

function HeaderContainer() {
  const history = useHistory();

  const handlePath = url => history.push(url);

  return <Header handlePath={handlePath} />;
}

export default HeaderContainer;
