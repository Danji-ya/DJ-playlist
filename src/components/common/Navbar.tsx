/* eslint-disable react/no-unstable-nested-components */
import { IconWrapper, NavItem, NavList, NavWrapper } from '../../styles/header';
import { PATH } from '../../constants/path';
import { icons } from '../../constants';

interface Props {
  path: string;
  handlePath: (url: string) => void;
}

function Navbar({ path, handlePath }: Props) {
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
    <NavWrapper>
      <NavList>
        {navItems.map((item) => {
          return (
            <NavItem
              key={`${item.path}`}
              active={item.path === path}
              onClick={() => handlePath(item.path)}
              aria-label="navigation button"
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
