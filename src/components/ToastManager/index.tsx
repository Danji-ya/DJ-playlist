import { useRecoilState } from 'recoil';
import Toast from '@components/Toast';
import CreateToastPortal from '@components/Toast/CreateToastPotal';
import { toastState } from '@store/toastState';
import Styled from '@components/Toast/Toast.style';
import { IToastState } from '@typings/toast';

function ToastManager() {
  const [toasts, setToasts] = useRecoilState<IToastState[]>(toastState);

  const onHideToast = (toastId: string) => {
    setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  };

  if (toasts.length === 0) return null;

  return (
    <CreateToastPortal>
      <Styled.Container>
        {toasts.map((toast) => (
          <Toast key={toast.id} onHideToast={onHideToast} {...toast} />
        ))}
      </Styled.Container>
    </CreateToastPortal>
  );
}

export default ToastManager;
