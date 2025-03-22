import { useState } from 'react';
import { SLIDER } from '@constants/slider';
import { isMinMaxSlider } from '@utils/slider';
import {
  TopSearchItem,
  SliderButtonType,
  SLIDER_BUTTON_TYPE_LIST,
} from '@typings/search';

function useSlider() {
  const [position, setPosition] = useState(0);
  const [topSearchedData] = useState<TopSearchItem[]>(SLIDER.INIT_DATA);

  const moveSlider = (type: SliderButtonType) => {
    const handleType = { prev: SLIDER.PREV, next: SLIDER.NEXT };
    let nextPosition = position + handleType[type];

    if (isMinMaxSlider(nextPosition, topSearchedData.length)) {
      nextPosition = type === 'prev' ? 0 : topSearchedData.length - 1;
    }

    setPosition(nextPosition);
  };

  const onMoveSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    if (!SLIDER_BUTTON_TYPE_LIST.some((type) => type === name)) return;

    moveSlider(name as SliderButtonType);
  };

  return {
    data: topSearchedData,
    position,
    onMoveSlider,
  };
}

export default useSlider;
