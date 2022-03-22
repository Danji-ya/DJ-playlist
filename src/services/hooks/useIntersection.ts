import { useCallback, useRef } from 'react';

interface Props {
  callback: (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => void;
  threshold: number;
}

function useIntersection({ callback, threshold }: Props) {
  const observer = useRef<IntersectionObserver | null>(null);
  const setRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(callback, {
        threshold,
      });

      if (node) observer.current.observe(node);
    },
    [callback, threshold],
  );

  return setRef;
}

export default useIntersection;
