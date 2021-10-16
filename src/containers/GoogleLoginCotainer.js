import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { loginState } from '../store/modules/common';
import { GoogleIconWrapper, GoogleLogout } from '../styles/accountStyle';

const clientId = process.env.REACT_APP_GOOGLE_LOGIN_CLIENTID;

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
