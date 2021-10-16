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

const GoogleIconWrapper = styled.div`
  width: 37px;
  height: 37px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleLogout = styled.button`
  border: none;
  padding: 2px 2px;
  font-weight: bold;
  outline: none;

  font-size: 0.8rem;
  color: white;
  background: #4c8ffb;
  box-shadow: inset 0 1px 0 #80b0fb;

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    padding: 0 10px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 1px #eaeaea, inset 0 1px 0 #5a94f1;
    background: #3f83f1;
  }
`;

export { UserIconWrapper, LoginForm, GoogleIconWrapper, GoogleLogout };
