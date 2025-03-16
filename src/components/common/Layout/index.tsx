import { ReactNode } from 'react';
import PlayerContainer from '@containers/PlayerContainer';
import Header from '@components/Header';
import SideNavigationBar from '@components/SideNavigationBar';
import Styled from './Layout.style';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Styled.Container>
        {children}
        <PlayerContainer />
      </Styled.Container>
      <SideNavigationBar />
    </>
  );
}

export default Layout;
