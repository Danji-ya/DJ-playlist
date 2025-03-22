import React from 'react';
import Item from '@components/Slider/Item';
import { getNumberOfItemsToShow, sliderItemShowReader } from '@utils/slider';
import useResize from '@services/hooks/useResize';
import useSlider from '@services/hooks/useSlider';
import { SearchKeywordChangeHandler, TopSearchItem } from '@typings/search';
import Styled from './Slider.style';

interface Props {
  onSearchKeywordChange: SearchKeywordChangeHandler;
}

function Slider({ onSearchKeywordChange }: Props) {
  const { data, position, onMoveSlider } = useSlider();
  const [windowWidth] = useResize({ type: 'throttle' });
  const isShowCurrentItem = sliderItemShowReader(
    position,
    getNumberOfItemsToShow(windowWidth),
  );

  return (
    <Styled.SliderContent>
      <Styled.PrevBtn
        name="prev"
        onClick={onMoveSlider}
        aria-label="slider prev"
      >
        &#10094;
      </Styled.PrevBtn>

      <Styled.SliderMargin>
        <Styled.SliderItemsContainer position={position}>
          {data.map((item: TopSearchItem, idx: number) => (
            <Item
              isShow={isShowCurrentItem(idx)}
              key={item.id}
              item={item}
              onSearchKeywordChange={onSearchKeywordChange}
            />
          ))}
        </Styled.SliderItemsContainer>
      </Styled.SliderMargin>

      <Styled.NextBtn
        name="next"
        onClick={onMoveSlider}
        aria-label="slider next"
      >
        &#10095;
      </Styled.NextBtn>
    </Styled.SliderContent>
  );
}

export default Slider;
