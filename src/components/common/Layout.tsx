import { ReactNode } from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import * as Styled from '../../styles/layout';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <HeaderContainer />
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
    </>
  );
}

export default Layout;
