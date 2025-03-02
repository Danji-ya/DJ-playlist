import styled, { css } from 'styled-components';
import { DEVICE } from '@constants/device';

const flexStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  ${flexStyle}
  width: 100%;
  height: 100vh;
`;

const Container = styled.section`
  ${flexStyle}
  flex-direction: column;
  font-weight: 600;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.navTextPrimary};

  @media ${DEVICE.MOBILE} {
    font-size: 1rem;
  }
`;

const Home = styled.button`
  background: ${({ theme }) => theme.navTextPrimary};
  color: ${({ theme }) => theme.sameColor};
  outline: none;
  border-radius: 10px;
  padding: 10px 15px;

  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }

  @media ${DEVICE.MOBILE} {
    padding: 8px 10px;
    font-size: 0.8rem;
  }
`;

export default { Background, Container, Title, Home };
