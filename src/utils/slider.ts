import { SIZE } from '@constants/device';

export function isMinMaxSlider(pos: number, numberOfSliderItem: number) {
  return pos >= numberOfSliderItem - 1 || pos < 0;
}

export function sliderItemShowReader(
  position: number,
  numberOfItemsToShow: number,
) {
  return function (idx: number) {
    return position <= idx && idx < position + numberOfItemsToShow;
  };
}

export function getNumberOfItemsToShow(deviceWidth: number) {
  if (deviceWidth > Number(SIZE.TABLET.replace('px', ''))) return 3;

  if (deviceWidth > Number(SIZE.MAX_MOBILE.replace('px', ''))) return 2;

  return 1;
}
