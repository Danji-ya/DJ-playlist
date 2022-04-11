import React from 'react';
import { ISearchKeyword, ITopSearched } from '../@types/search';
import * as Styled from '../styles/search';
import SliderItem from './SliderItem';

interface Props {
  data: ITopSearched[];
  handleSlider: (e: React.MouseEvent<HTMLButtonElement>) => void;
  position: number;
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
}

function Slider({ data, handleSlider, position, handleSearchKeyword }: Props) {
  return (
    <Styled.Container>
      <Styled.SliderHeader>인기 검색어</Styled.SliderHeader>
      <Styled.SliderContent>
        <Styled.SliderItemsContainer position={position}>
          {data.map((item: ITopSearched) => (
            <SliderItem
              key={item.id}
              item={item}
              handleSearchKeyword={handleSearchKeyword}
            />
          ))}
        </Styled.SliderItemsContainer>
        <Styled.ControlContainer>
          <Styled.PrevBtn
            type="button"
            name="prev"
            onClick={(e) => handleSlider(e)}
            aria-label="slider prev button"
          >
            &#10094;
          </Styled.PrevBtn>
          <Styled.NextBtn
            type="button"
            name="next"
            onClick={(e) => handleSlider(e)}
            aria-label="slider next button"
          >
            &#10095;
          </Styled.NextBtn>
        </Styled.ControlContainer>
      </Styled.SliderContent>
    </Styled.Container>
  );
}

export default Slider;
