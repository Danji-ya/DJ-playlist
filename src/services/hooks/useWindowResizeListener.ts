import { useEffect } from 'react';
import { debounce } from '@utils/common';

interface UseWindowResizeListenerProps {
  onResize: () => void;
  delay?: number;
}

export const useWindowResizeListener = ({
  onResize,
  delay = 300,
}: UseWindowResizeListenerProps) => {
  useEffect(() => {
    const debouncedResize = debounce(onResize, delay);

    window.addEventListener('resize', debouncedResize);

    onResize();

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [onResize, delay]);
};
