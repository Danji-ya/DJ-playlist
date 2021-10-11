import React from 'react';
import { icons } from '../../constatns';
import { Icon, NavItem, NavList, NavWrapper } from '../../styles/headerStyle';

const Navbar = ({ path, handlePath }) => {
  const navItems = [
    {
      path: '/',
      src: `${icons.searchW.default}`,
    },
    {
      path: '/playlist',
      src: `${icons.ribbonW.default}`,
    },
  ];

  return (
    <NavWrapper>
      <NavList>
        {navItems.map((item, idx) => {
          return (
            <NavItem
              active={item.path === path}
              onClick={() => handlePath(item.path)}
              key={`${item.path}`}
            >
              <Icon src={item.src} />
            </NavItem>
          );
        })}
      </NavList>
    </NavWrapper>
  );
};

export default Navbar;
