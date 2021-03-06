export interface ITopSearched {
  id: string;
  src: string;
  title: string;
}

export interface ISearchKeyword {
  value: string;
  isAutoKeyword?: boolean;
}

export const SLIDER_BUTTON_TYPE_LIST = ['prev', 'next'] as const;

export type SliderButtonType = typeof SLIDER_BUTTON_TYPE_LIST[number];
