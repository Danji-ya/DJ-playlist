import React from 'react';
import { ITopSearched } from '../@types/search';
import {
  Container,
  ControlContainer,
  NextBtn,
  PrevBtn,
  SliderContent,
  SliderHeader,
  SliderItemsContainer,
} from '../styles/search';
import SliderItem from './SliderItem';

interface Props {
  data: ITopSearched[];
  handleSlider: (e: React.MouseEvent<HTMLButtonElement>) => void;
  position: number;
  handleSearchKeyword: (keyword: string, isAutoKeyword?: boolean) => void;
}

function Slider({ data, handleSlider, position, handleSearchKeyword }: Props) {
  return (
    <Container>
      <SliderHeader>인기 검색어</SliderHeader>
      <SliderContent>
        <SliderItemsContainer position={position}>
          {data.map((item: ITopSearched) => (
            <SliderItem
              key={item.id}
              item={item}
              handleSearchKeyword={handleSearchKeyword}
            />
          ))}
        </SliderItemsContainer>
        <ControlContainer>
          <PrevBtn
            type="button"
            name="prev"
            onClick={(e) => handleSlider(e)}
            aria-label="slider prev button"
          >
            &#10094;
          </PrevBtn>
          <NextBtn
            type="button"
            name="next"
            onClick={(e) => handleSlider(e)}
            aria-label="slider next button"
          >
            &#10095;
          </NextBtn>
        </ControlContainer>
      </SliderContent>
    </Container>
  );
}

export default Slider;
