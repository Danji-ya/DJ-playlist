import { useSetRecoilState } from 'recoil';
import { toastState } from '@store/toastState';
import { uuidv4 } from '@utils/common';
import { IToast } from '../../@types/toast';

function useToast() {
  const setToasts = useSetRecoilState(toastState);

  const createToast = (toast: IToast) => {
    setToasts((prevToasts) => [...prevToasts, { id: uuidv4(), ...toast }]);
  };

  return createToast;
}

export default useToast;
