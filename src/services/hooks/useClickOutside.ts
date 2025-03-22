import { useEffect, RefObject, useCallback } from 'react';

type Handler = () => void;
type ReactFocusEvent = React.FocusEvent<HTMLElement>;

interface ClickOutsideOptions {
  onOutsideClick?: Handler;
  onOutsideBlur?: Handler;
  enabled?: boolean;
}

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  options: ClickOutsideOptions = {},
) {
  const { onOutsideClick, onOutsideBlur, enabled = true } = options;

  const handleOutsideEvent = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      if (onOutsideClick) {
        onOutsideClick();
      }
    },
    [ref, onOutsideClick],
  );

  const handleBlur = useCallback(
    (e: ReactFocusEvent) => {
      if (!ref.current || ref.current.contains(e.relatedTarget as Node)) return;

      if (onOutsideBlur) {
        onOutsideBlur();
      }
    },
    [ref, onOutsideBlur],
  );

  useEffect(() => {
    if (!enabled || (!onOutsideClick && !onOutsideBlur)) {
      return undefined;
    }

    document.addEventListener('mousedown', handleOutsideEvent);
    document.addEventListener('touchstart', handleOutsideEvent);

    return () => {
      document.removeEventListener('mousedown', handleOutsideEvent);
      document.removeEventListener('touchstart', handleOutsideEvent);
    };
  }, [enabled, handleOutsideEvent, onOutsideClick, onOutsideBlur]);

  return { handleBlur };
}
