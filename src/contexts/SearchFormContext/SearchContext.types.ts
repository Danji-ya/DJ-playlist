export type SearchKeywordChangeHandler = (value: string) => void;

export interface SearchFormContextValue {
  keyword: string;
  searchControls: {
    onSearchKeywordChange: SearchKeywordChangeHandler;
  };
}
