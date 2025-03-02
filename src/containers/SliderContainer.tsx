import React, { useState } from 'react';
import Slider from '@components/Slider';
import { SLIDER } from '@constants/slider';
import { isMinMaxSlider } from '@utils/slider';
import {
  ISearchKeyword,
  ITopSearched,
  SliderButtonType,
  SLIDER_BUTTON_TYPE_LIST,
} from '../@types/search';

interface Props {
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
}

function SliderContainer({ handleSearchKeyword }: Props) {
  const [position, setPosition] = useState(0);
  const [topSearchedData, setTopSearchedData] = useState<ITopSearched[]>(
    SLIDER.INIT_DATA,
  );

  const moveSlider = (type: SliderButtonType) => {
    const handleType = { prev: SLIDER.PREV, next: SLIDER.NEXT };
    let nextPosition = position + handleType[type];

    if (isMinMaxSlider(nextPosition, topSearchedData.length)) {
      nextPosition = type === 'prev' ? 0 : topSearchedData.length - 1;
    }

    setPosition(nextPosition);
  };

  const handleSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    if (!SLIDER_BUTTON_TYPE_LIST.some((type) => type === name)) return;

    moveSlider(name as SliderButtonType);
  };

  return (
    <Slider
      data={topSearchedData}
      position={position}
      handleSlider={handleSlider}
      handleSearchKeyword={handleSearchKeyword}
    />
  );
}

export default SliderContainer;
