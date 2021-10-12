import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiHome } from 'react-icons/hi';
import styled from 'styled-components';
import { IconWrapper, NavItem, NavList, NavWrapper } from '../../styles/headerStyle';

const Navbar = ({ path, handlePath }) => {
  const navItems = [
    {
      name: '홈',
      path: '/',
      // eslint-disable-next-line react/jsx-props-no-spreading
      Icon: props => <HiHome {...props} />,
    },
    {
      name: '검색하기',
      path: '/search',
      // eslint-disable-next-line react/jsx-props-no-spreading
      Icon: props => <FiSearch {...props} />,
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
              <IconWrapper active={item.path === path}>
                <item.Icon size={25} />
              </IconWrapper>
              <p>{item.name}</p>
            </NavItem>
          );
        })}
      </NavList>
    </NavWrapper>
  );
};

export default Navbar;
