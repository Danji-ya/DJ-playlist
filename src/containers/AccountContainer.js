import React, { useEffect, useRef, useState } from 'react';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import Modal from '../components/common/Modal';
import { UserIconWrapper, LoginForm } from '../styles/AccountStyle';
import GoogleLoginCotainer from './GoogleLoginCotainer';

function AccountContainer() {
  const [modalState, setModalState] = useState(false);
  const isLogin = useSelector(state => state.common.isLogin);
  const refModal = useRef();

  const onClose = () => setModalState(false);

  const onOpen = () => setModalState(true);

  const handleClick = e => {
    if (!refModal.current?.contains(e.target)) {
      if (modalState) onClose();
    }
  };

  const handleModalState = () => setModalState(!modalState);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [modalState]);

  return (
    <>
      <UserIconWrapper onClick={onOpen}>
        {isLogin ? <Avatar value="DJ" size="35" round /> : <Avatar value="?" size="35" round />}
      </UserIconWrapper>
      <Modal ref={refModal} modalState={modalState} onClose={onClose} width="450px" height="600px">
        <LoginForm>
          <GoogleLoginCotainer handleModalState={handleModalState} />
        </LoginForm>
      </Modal>
    </>
  );
}

export default AccountContainer;
