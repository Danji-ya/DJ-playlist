import { useSetRecoilState } from 'recoil';
import { IToast } from '../../@types/toast';
import { toastState } from '../../store/toastState';
import { uuidv4 } from '../../utils/common';

function useToast() {
  const setToasts = useSetRecoilState(toastState);

  const createToast = (toast: IToast) => {
    setToasts((prevToasts) => [...prevToasts, { id: uuidv4(), ...toast }]);
  };

  return createToast;
}

export default useToast;
