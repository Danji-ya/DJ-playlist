import React from 'react';
import { ISearchKeyword, ITopSearched } from '../../@types/search';
import Styled from './Slider.style';
import Item from './Item';

interface Props {
  data: ITopSearched[];
  handleSlider: (e: React.MouseEvent<HTMLButtonElement>) => void;
  position: number;
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
}

function Slider({ data, handleSlider, position, handleSearchKeyword }: Props) {
  return (
    <Styled.SliderContent>
      <Styled.SliderItemsContainer position={position}>
        {data.map((item: ITopSearched) => (
          <Item
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
          aria-label="slider prev"
        >
          &#10094;
        </Styled.PrevBtn>
        <Styled.NextBtn
          type="button"
          name="next"
          onClick={(e) => handleSlider(e)}
          aria-label="slider next"
        >
          &#10095;
        </Styled.NextBtn>
      </Styled.ControlContainer>
    </Styled.SliderContent>
  );
}

export default Slider;
