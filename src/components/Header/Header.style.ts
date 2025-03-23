import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DEVICE } from '@constants/device';
import { LAYOUT } from '@constants/layout';

const Container = styled.header`
  grid-area: sidebar;
  width: ${LAYOUT.HEADER_WIDTH};
  height: 100%;
  padding: 30px 10px 0 10px;
  z-index: 50;
  background: ${({ theme }) => theme.header};
  display: flex;
  flex-direction: column;
  transition: background 0.5s linear;

  @media ${DEVICE.DESKTOP} {
    grid-area: header;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${LAYOUT.HEADER_HEIGHT};
    padding: 0 50px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    font-family: 'BMHANNAPro', sans-serif;
    font-size: 1.5rem;
  }
`;

const LogoImgWrapper = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: ${({ theme }) => theme.navTextPrimary};
  fill: ${({ theme }) => theme.body};
`;

const LogoText = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.navTextPrimary};

  @media ${DEVICE.MOBILE} {
    display: none;
  }
`;

export default {
  Container,
  LogoLink,
  LogoText,
  LogoImgWrapper,
};
