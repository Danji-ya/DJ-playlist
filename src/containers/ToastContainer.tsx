/* eslint-disable @typescript-eslint/no-use-before-define */
import { useRecoilState } from 'recoil';
import { IToastState } from '../@types/toast';
import Toast from '../components/common/Toast';
import CreateToastPortal from '../components/common/Toast/CreateToastPotal';
import { toastState } from '../store/toastState';
import * as Styled from '../styles/toast';

function ToastContainer() {
  const [toasts, setToasts] = useRecoilState<IToastState[]>(toastState);

  const hideToast = (toastId: string) => {
    setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  };

  return (
    <CreateToastPortal>
      <Styled.Container>
        {toasts.map((toast) => (
          <Toast key={toast.id} hideToast={hideToast} {...toast} />
        ))}
      </Styled.Container>
    </CreateToastPortal>
  );
}

export default ToastContainer;
