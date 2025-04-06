import { ReactNode } from 'react';
import PlayerContextProvider from '@contexts/PlayerContext';
import Header from '@components/Header';
import Player from '@components/Player';
import SideNavigationBar from '@components/SideNavigationBar';
import Styled from './Layout.style';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Styled.Container>
      <Header />
      <Styled.ContentArea>
        {children}
        <SideNavigationBar />
      </Styled.ContentArea>
      <PlayerContextProvider>
        <Player />
      </PlayerContextProvider>
    </Styled.Container>
  );
}

export default Layout;
