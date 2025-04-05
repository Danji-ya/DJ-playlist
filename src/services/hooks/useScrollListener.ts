import { useEffect, RefObject } from 'react';

interface UseScrollListenerProps {
  ref: RefObject<HTMLElement>;
  onScroll: () => void;
}

export const useScrollListener = ({
  ref,
  onScroll,
}: UseScrollListenerProps) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    element.addEventListener('scroll', onScroll);

    onScroll();

    return () => {
      element.removeEventListener('scroll', onScroll);
    };
  }, [ref, onScroll]);
};
