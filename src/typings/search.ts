export interface TopSearchItem {
  id: string;
  src: string;
  title: string;
}

export type SearchKeywordChangeHandler = (params: {
  value: string;
  isAutoKeyword?: boolean;
}) => void;

export const SLIDER_BUTTON_TYPE_LIST = ['prev', 'next'] as const;

export type SliderButtonType = typeof SLIDER_BUTTON_TYPE_LIST[number];
