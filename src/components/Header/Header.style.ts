import styled from 'styled-components';
import { STYLE } from '../../constants';
import { DEVICE } from '../../constants/device';

const Container = styled.header`
  position: fixed;
  top: 0;
  width: ${STYLE.HEADER_WIDTH};
  height: 100vh;
  padding-top: 30px;
  z-index: 50;
  background: ${({ theme }) => theme.header};
  display: flex;
  flex-direction: column;
  transition: background 0.5s linear;

  @media ${DEVICE.DESKTOP} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${STYLE.HEADER_HEIGHT};
    padding-top: 0px;
    padding: 0 50px;

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

const LogoImgWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: ${({ theme }) => theme.navTextPrimary};
  fill: ${({ theme }) => theme.body};
`;

const LogoText = styled.p`
  color: ${({ theme }) => theme.navTextPrimary};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  p {
    font-weight: bold;
    font-family: 'BMHANNAPro', sans-serif;
    font-size: 1.5rem;
    margin-left: 15px;
  }

  &:hover {
    cursor: pointer;
  }

  @media ${DEVICE.DESKTOP} {
    width: auto;
  }

  @media ${DEVICE.MOBILE} {
    p {
      display: none;
    }
  }
`;

export default {
  Container,
  LogoWrapper,
  LogoText,
  LogoImgWrapper,
};
