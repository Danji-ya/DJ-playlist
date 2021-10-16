import React, { forwardRef, useEffect, useState } from 'react';
import { CloseBtn, ModalBackground, ModalContainer } from '../../styles/modalStyle';

const Modal = forwardRef(({ modalState, onClose, children, width, height }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (modalState) {
      setIsOpen(true);
    } else {
      timer = setTimeout(() => setIsOpen(false), 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [modalState]);

  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContainer ref={ref} width={width} height={height} modalState={modalState}>
        <CloseBtn type="button" onClick={onClose} onKeyDown={onClose}>
          &#10094;
        </CloseBtn>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
});

export default Modal;
