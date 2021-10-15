import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { loginState } from '../store/modules/common';

const clientId = process.env.REACT_APP_GOOGLE_LOGIN_CLIENTID;

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

function GoogleLoginCotainer({ handleModalState }) {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.common.isLogin);

  const onSuccess = async res => {
    const {
      googleId,
      profileObj: { email, familyName, givenName, imageUrl },
    } = res;

    await handleModalState();
    dispatch(
      loginState({
        email,
        familyName,
        givenName,
        imageUrl,
      }),
    );
  };

  const onLogoutSuccess = () => {
    const userInfo = {};
    handleModalState();
    dispatch(loginState(userInfo));
  };

  const onLogout = () => {
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (auth2 !== null) {
        auth2
          .signOut()
          .then(auth2.disconnect().then(() => onLogoutSuccess()))
          .catch(e => console.log(e));
      }
    }
  };

  const onFailure = e => {
    console.log(e);
  };

  return (
    <>
      {isLogin ? (
        <>
          <GoogleLogout type="button" onClick={onLogout}>
            <GoogleIconWrapper>
              <FcGoogle size={30} />
            </GoogleIconWrapper>
            <p>로그아웃</p>
          </GoogleLogout>
        </>
      ) : (
        <GoogleLogin
          buttonText="구글로 로그인"
          theme="dark"
          clientId={clientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      )}
    </>
  );
}

export default GoogleLoginCotainer;
