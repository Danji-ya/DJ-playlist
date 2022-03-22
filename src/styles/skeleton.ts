import styled, { css, keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(150%);
  }
`;

const Element = css`
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.skeletonBg};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.skeletonLoading};
    animation: ${loading} 1.5s infinite;
  }
`;

const Card = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  width: 250px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;

  background: ${({ theme }) => theme.cardBg};
  border: ${({ theme }) => `1px solid ${theme.border}`};
`;

const Thumnail = styled.div`
  width: 100%;
  height: 200px;
  ${Element}
`;

const Title = styled.p`
  margin: 7px 0;
  width: 150px;
  height: 10px;
  ${Element}
`;

const SubTitle = styled.p`
  margin: 5px 0;
  width: 50px;
  height: 10px;
  ${Element}
`;

export { Card, Thumnail, Title, SubTitle };
