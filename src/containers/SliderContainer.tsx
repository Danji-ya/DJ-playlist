import React, { useState } from 'react';
import { ITopSearched } from '../@types/search';
import SearchTopWord from '../components/SearchTopWord';
import { SLIDER } from '../constants/slider';

type BtnType = 'next' | 'prev';

interface Props {
  handleSearchKeyword: (value: string) => void;
}

function SliderContainer({ handleSearchKeyword }: Props) {
  const [position, setPosition] = useState(0);
  const [topSearched, setTopSearched] = useState<ITopSearched[]>(
    SLIDER.INIT_DATA,
  );

  const imgTotalWidth = topSearched.length * SLIDER.ITEM_WIDTH;

  const isMinMaxSlider = (pos: number) => pos >= imgTotalWidth || pos < 0;

  const moveSlider = (type: BtnType) => {
    const handleType = { prev: -SLIDER.ITEM_WIDTH, next: SLIDER.ITEM_WIDTH };
    let nextPosition = position + handleType[type];

    if (isMinMaxSlider(nextPosition))
      nextPosition = type === 'prev' ? 0 : nextPosition - SLIDER.ITEM_WIDTH;

    setPosition(nextPosition);
  };

  const handleSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    if (name.includes('prev') || name.includes('next')) {
      moveSlider(name as BtnType);
    }
  };

  return (
    <SearchTopWord
      data={topSearched}
      position={position}
      handleSlider={handleSlider}
      handleSearchKeyword={handleSearchKeyword}
    />
  );
}

export default SliderContainer;
