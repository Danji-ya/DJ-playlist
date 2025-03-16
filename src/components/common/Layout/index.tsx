import { ReactNode } from 'react';
import Header from '@components/Header';
import Player from '@components/Player';
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
        <Player />
      </Styled.Container>
      <SideNavigationBar />
    </>
  );
}

export default Layout;
