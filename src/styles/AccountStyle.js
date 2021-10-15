import styled from 'styled-components';

const UserIconWrapper = styled.div`
  > div {
    &:hover {
      cursor: pointer;
    }
  }
`;

const LoginForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { UserIconWrapper, LoginForm };
