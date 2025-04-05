import { useState, useCallback, RefObject } from 'react';
import { useScrollListener } from '@services/hooks/useScrollListener';
import { useWindowResizeListener } from '@services/hooks/useWindowResizeListener';

const SCROLL_MARGIN = 5;

export const useCarouselButtons = ({
  carouselRef,
}: {
  carouselRef: RefObject<HTMLUListElement>;
}) => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const updateButtonsState = useCallback(() => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeftButton(scrollLeft > 0);

    setShowRightButton(scrollLeft + clientWidth < scrollWidth - SCROLL_MARGIN);
  }, [carouselRef]);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;

    updateButtonsState();
  }, [carouselRef, updateButtonsState]);

  useScrollListener({
    ref: carouselRef,
    onScroll: handleScroll,
  });

  useWindowResizeListener({
    onResize: updateButtonsState,
  });

  return {
    showLeftButton,
    showRightButton,
    updateButtonsState,
  };
};

export const useCarouselScroll = ({
  carouselRef,
  onScroll,
  scrollDuration = 500,
  scrollFraction = 0.8,
}: {
  carouselRef: RefObject<HTMLUListElement>;
  onScroll?: () => void;
  scrollDuration?: number;
  scrollFraction?: number;
}) => {
  const scrollToDirection = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth * scrollFraction;
    const scrollPosition =
      direction === 'left'
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;

    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });

    setTimeout(() => {
      onScroll?.();
    }, scrollDuration);
  };

  const handleLeftClick = () => {
    scrollToDirection('left');
  };

  const handleRightClick = () => {
    scrollToDirection('right');
  };

  return {
    handleLeftClick,
    handleRightClick,
  };
};
