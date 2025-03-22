export interface TopSearchItem {
  id: string;
  src: string;
  title: string;
}

export const SLIDER_BUTTON_TYPE_LIST = ['prev', 'next'] as const;

export type SliderButtonType = typeof SLIDER_BUTTON_TYPE_LIST[number];
