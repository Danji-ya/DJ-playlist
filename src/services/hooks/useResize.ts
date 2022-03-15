import { useState, useMemo, useEffect } from 'react';
import { debounce, thorttle } from '../../utils/common';

interface Props {
  type: 'debounce' | 'throttle';
}

function useResize({ type }: Props) {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const effectFn = useMemo(() => {
    switch (type) {
      case 'debounce':
        return debounce;

      case 'throttle':
      default:
        return thorttle;
    }
  }, [type]);

  useEffect(() => {
    function changeSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    const handleChangeSize = effectFn(changeSize);

    window.addEventListener('resize', handleChangeSize);

    return () => {
      window.removeEventListener('resize', handleChangeSize);
    };
  }, [effectFn]);

  return windowSize;
}

export default useResize;
