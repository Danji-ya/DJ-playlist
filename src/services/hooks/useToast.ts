import { useSetRecoilState } from 'recoil';
import { toastState } from '@store/toastState';
import { uuidv4 } from '@utils/common';
import { Toast } from '@typings/toast';

function useToast() {
  const setToasts = useSetRecoilState(toastState);

  const createToast = (toast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, { id: uuidv4(), ...toast }]);
  };

  return createToast;
}

export default useToast;
