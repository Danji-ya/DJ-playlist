/* eslint-disable react/no-unstable-nested-components */
import Search from '../../assets/icons/search.svg';
import Home from '../../assets/icons/home.svg';
import { IconWrapper, NavItem, NavList, NavWrapper } from '../../styles/header';

function Navbar({ path, handlePath }: any) {
  const navItems = [
    {
      name: '홈',
      path: '/',
      Icon: (props: { width: string; height: string }) => <Home {...props} />,
    },
    {
      name: '검색하기',
      path: '/search',
      Icon: (props: { width: string; height: string }) => <Search {...props} />,
    },
  ];

  return (
    <NavWrapper>
      <NavList>
        {navItems.map((item) => {
          return (
            <NavItem
              active={item.path === path}
              onClick={() => handlePath(item.path)}
              key={`${item.path}`}
            >
              <IconWrapper>
                <item.Icon width="25px" height="25px" />
              </IconWrapper>
              <p>{item.name}</p>
            </NavItem>
          );
        })}
      </NavList>
    </NavWrapper>
  );
}

export default Navbar;
