import { useRecoilState } from 'recoil';
import Toast from '@components/Toast';
import CreateToastPortal from '@components/Toast/CreateToastPotal';
import { toastState } from '@store/toastState';
import Styled from '@components/Toast/Toast.style';
import { IToastState } from '../@types/toast';

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
