import { ReactNode } from 'react';
import HeaderContainer from '../../../containers/HeaderContainer';
import Styled from './Layout.style';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <HeaderContainer />
      <Styled.Container>{children}</Styled.Container>
    </>
  );
}

export default Layout;
