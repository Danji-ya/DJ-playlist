import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoResultsImg = styled.img`
  width: 450px;
  height: 450px;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const NoResultsTitle = styled.h2`
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const GotoButton = styled.button`
  margin-top: 10px;
  padding: 15px 25px;
  border-radius: 10px;
  outline: none;
  border: none;
  background: #1f3e5a;
  color: white;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.5rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export {
  Background,
  NoResultsWrapper,
  NoResultsImg,
  NoResultsTitle,
  GotoButton,
};
