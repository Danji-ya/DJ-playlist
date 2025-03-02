import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DEVICE } from '@constants/device';

const Container = styled.nav`
  padding: 15% 0;

  @media ${DEVICE.DESKTOP} {
    padding: 0 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${DEVICE.DESKTOP} {
    flex-direction: row;
  }
`;

const Item = styled.li`
  @media ${DEVICE.DESKTOP} {
    &:first-child {
      margin-right: 5px;
    }
  }
`;

const NavLink = styled(Link)<{ active: string }>`
  display: flex;
  align-items: center;
  height: 35px;
  margin: 5px 0;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.navTextSecondary};
  fill: ${({ theme }) => theme.navTextSecondary};

  // active일 때,
  ${({ active, theme }) =>
    active === 'true' &&
    css`
      color: ${theme.navTextPrimary};
      fill: ${theme.navTextPrimary};
      background: ${theme.navBtn};
    `}

  &:hover {
    color: ${({ theme }) => theme.navTextPrimary};
    fill: ${({ theme }) => theme.navTextPrimary};
    cursor: pointer;
  }

  @media ${DEVICE.DESKTOP} {
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 0 0;
    border-radius: 50%;
  }
`;

const IconWrapper = styled.span`
  margin: 0 5%;
`;

const Text = styled.span`
  @media ${DEVICE.DESKTOP} {
    display: none;
  }
`;

export default {
  Container,
  List,
  Item,
  NavLink,
  IconWrapper,
  Text,
};
