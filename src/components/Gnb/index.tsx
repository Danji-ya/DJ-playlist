/* eslint-disable react/no-unstable-nested-components */
import { useLocation } from 'react-router-dom';
import { PATH } from '@constants/path';
import icons from '@constants/icons';
import { H2A11Y } from '@styles/common';
import Styled from './Gnb.style';

function Gnb() {
  const { pathname: path } = useLocation();

  const navItems = [
    {
      name: '홈',
      path: PATH.MAIN,
      Icon: (props: { width: string; height: string }) => (
        <icons.Home {...props} />
      ),
    },
    {
      name: '검색하기',
      path: PATH.SEARCH,
      Icon: (props: { width: string; height: string }) => (
        <icons.Search {...props} />
      ),
    },
  ];

  return (
    <Styled.Container>
      <H2A11Y>메뉴</H2A11Y>
      <Styled.List>
        {navItems.map((item) => {
          return (
            <Styled.Item key={`${item.path}`}>
              <Styled.NavLink
                to={item.path}
                active={String(item.path === path)}
              >
                <Styled.IconWrapper>
                  <item.Icon width="25px" height="25px" />
                </Styled.IconWrapper>
                <Styled.Text>{item.name}</Styled.Text>
              </Styled.NavLink>
            </Styled.Item>
          );
        })}
      </Styled.List>
    </Styled.Container>
  );
}

export default Gnb;
