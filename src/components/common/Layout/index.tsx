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
    <>
      <Header />
      <Styled.Container>
        {children}
        <PlayerContextProvider>
          <Player />
        </PlayerContextProvider>
      </Styled.Container>
      <SideNavigationBar />
    </>
  );
}

export default Layout;
