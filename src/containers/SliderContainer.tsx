import React, { useState } from 'react';
import { ITopSearched } from '../@types/search';
import Slider from '../components/Slider';
import { SLIDER } from '../constants/slider';

type BtnType = 'next' | 'prev';

interface Props {
  handleSearchKeyword: (value: string, isAutoKeyword?: boolean) => void;
}

function SliderContainer({ handleSearchKeyword }: Props) {
  const [position, setPosition] = useState(0);
  const [topSearched, setTopSearched] = useState<ITopSearched[]>(
    SLIDER.INIT_DATA,
  );

  const isMinMaxSlider = (pos: number) =>
    pos >= topSearched.length - 1 || pos < 0;

  const moveSlider = (type: BtnType) => {
    const handleType = { prev: SLIDER.PREV, next: SLIDER.NEXT };
    let nextPosition = position + handleType[type];

    if (isMinMaxSlider(nextPosition))
      nextPosition = type === 'prev' ? 0 : topSearched.length - 1;

    setPosition(nextPosition);
  };

  const handleSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    if (name.includes('prev') || name.includes('next')) {
      moveSlider(name as BtnType);
    }
  };

  return (
    <Slider
      data={topSearched}
      position={position}
      handleSlider={handleSlider}
      handleSearchKeyword={handleSearchKeyword}
    />
  );
}

export default SliderContainer;
