import styled, { css } from 'styled-components';
import { DEVICE } from '../../constants/device';

const Container = styled.nav`
  padding: 15% 0;

  @media ${DEVICE.DESKTOP} {
    padding: 0 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICE.DESKTOP} {
    flex-direction: row;
  }
`;

const Item = styled.li<{ active: boolean }>`
  width: 90%;
  height: 35px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.navTextSecondary};
  fill: ${({ theme }) => theme.navTextSecondary};

  // active일 때,
  ${({ active, theme }) =>
    active &&
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
  margin: 3px 0;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }

  @media ${DEVICE.DESKTOP} {
    justify-content: center;
    margin: 0 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    p {
      display: none;
    }
  }
`;

const IconWrapper = styled.div`
  margin: 0 5%;
`;

const Icon = styled.img.attrs((props) => ({
  src: props.src,
  alt: '',
}))`
  margin: 1% 10%;
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

export default {
  Container,
  List,
  Item,
  IconWrapper,
  Icon,
};
