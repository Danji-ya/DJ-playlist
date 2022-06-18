import { ReactNode } from 'react';
import HeaderContainer from '../../../containers/HeaderContainer';
import PlayerContainer from '../../../containers/PlayerContainer';
import Sidebar from '../../Sidebar';
import Styled from './Layout.style';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <HeaderContainer />
      <Styled.Container>
        {children}
        <PlayerContainer />
      </Styled.Container>
      <Sidebar />
    </>
  );
}

export default Layout;
