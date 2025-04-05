import { useRef } from 'react';
import { CAROUSEL_LIST } from '@constants/carousel';
import { useCarouselButtons, useCarouselScroll } from './Carousel.hook';
import Item from './Item';
import { Styled } from './Carousel.style';

function GenreCarousel({ title }: { title: React.ReactNode }) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const { showLeftButton, showRightButton, updateButtonsState } =
    useCarouselButtons({
      carouselRef,
    });

  const { handleLeftClick, handleRightClick } = useCarouselScroll({
    carouselRef,
    onScroll: updateButtonsState,
    scrollDuration: 500,
    scrollFraction: 0.8,
  });

  return (
    <Styled.Container>
      <Styled.Header>
        {title}
        <Styled.ButtonGroup>
          <Styled.Button
            onClick={handleLeftClick}
            disabled={!showLeftButton}
            aria-label="carousel prev"
          >
            &#10094;
          </Styled.Button>
          <Styled.Button
            onClick={handleRightClick}
            disabled={!showRightButton}
            aria-label="carousel next"
          >
            &#10095;
          </Styled.Button>
        </Styled.ButtonGroup>
      </Styled.Header>

      <Styled.CarouselWrapper>
        <Styled.SearchItemList ref={carouselRef}>
          {CAROUSEL_LIST.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              genre={item.genre}
              image={item.src}
              title={item.title}
            />
          ))}
        </Styled.SearchItemList>
      </Styled.CarouselWrapper>
    </Styled.Container>
  );
}

export default GenreCarousel;
