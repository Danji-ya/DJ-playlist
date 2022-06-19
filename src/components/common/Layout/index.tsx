import { ReactNode } from 'react';
import PlayerContainer from '../../../containers/PlayerContainer';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
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
      <Sidebar />
    </>
  );
}

export default Layout;
