/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { ISearchKeyword, ITopSearched } from '../../@types/search';
import Styled from './Slider.style';
import Item from './Item';
import {
  getNumberOfItemsToShow,
  sliderItemShowReader,
} from '../../utils/slider';
import useResize from '../../services/hooks/useResize';

interface Props {
  data: ITopSearched[];
  handleSlider: (e: React.MouseEvent<HTMLButtonElement>) => void;
  position: number;
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
}

function Slider({ data, handleSlider, position, handleSearchKeyword }: Props) {
  const [windowWidth, _] = useResize({ type: 'throttle' });
  const isShowCurrentItem = sliderItemShowReader(
    position,
    getNumberOfItemsToShow(windowWidth),
  );

  return (
    <Styled.SliderContent>
      <Styled.PrevBtn
        name="prev"
        onClick={(e) => handleSlider(e)}
        aria-label="slider prev"
      >
        &#10094;
      </Styled.PrevBtn>

      <Styled.SliderMargin>
        <Styled.SliderItemsContainer position={position}>
          {data.map((item: ITopSearched, idx: number) => (
            <Item
              isShow={isShowCurrentItem(idx)}
              key={item.id}
              item={item}
              handleSearchKeyword={handleSearchKeyword}
            />
          ))}
        </Styled.SliderItemsContainer>
      </Styled.SliderMargin>

      <Styled.NextBtn
        name="next"
        onClick={(e) => handleSlider(e)}
        aria-label="slider next"
      >
        &#10095;
      </Styled.NextBtn>
    </Styled.SliderContent>
  );
}

export default Slider;
