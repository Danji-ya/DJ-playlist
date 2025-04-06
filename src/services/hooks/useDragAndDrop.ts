import { useCallback, useRef } from 'react';

interface DragAndDropHandlers<T extends HTMLElement = HTMLElement> {
  onDragStart: (e: React.DragEvent<T>) => void;
  onDragOver: (e: React.DragEvent<T>) => void;
  onDrop: (e: React.DragEvent<T>) => void;
}

interface DragAndDropReturn<T extends HTMLElement = HTMLElement> {
  draggableRef: React.RefObject<T | null>;
  handlers: DragAndDropHandlers<T>;
}

function useDragAndDrop<T extends HTMLElement = HTMLElement>(
  onDropCallback: (sourceElement: T, targetElement: T) => void,
): DragAndDropReturn<T> {
  const draggableRef = useRef<T | null>(null);

  const onDragStart = useCallback((e: React.DragEvent<T>) => {
    draggableRef.current = e.currentTarget;
  }, []);

  const onDragOver = useCallback((e: React.DragEvent<T>) => {
    e.preventDefault();
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<T>) => {
      e.preventDefault();

      const sourceElement = draggableRef.current;
      const targetElement = e.currentTarget;

      if (!sourceElement) return;

      if (sourceElement === targetElement) return;

      onDropCallback(sourceElement, targetElement);
      draggableRef.current = null;
    },
    [onDropCallback],
  );

  return {
    draggableRef,
    handlers: {
      onDragStart,
      onDragOver,
      onDrop,
    },
  };
}

export default useDragAndDrop;
