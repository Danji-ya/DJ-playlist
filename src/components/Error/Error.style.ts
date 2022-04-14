import styled from 'styled-components';
import { DEVICE } from '../../constants/device';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  fill: ${({ theme }) => theme.navTextPrimary};
  color: ${({ theme }) => theme.navTextPrimary};
`;

const Title = styled.h2`
  font-size: 1rem;
  font-family: 'BMHANNAPro', sans-serif;

  @media ${DEVICE.TABLET} {
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: none;
  background: #1f3e5a;
  color: white;
  font-size: 1rem;

  @media ${DEVICE.TABLET} {
    padding: 5px 15px;
    font-size: 0.8rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export default { Background, Container, Title, Button };
