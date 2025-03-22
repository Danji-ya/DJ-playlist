import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { keywordState } from '@store/keywordState';
import { SearchKeywordChangeHandler } from '@typings/search';
import createContext from '@services/hooks/useContext';

interface SearchFormContextValue {
  keyword: string;
  searchControls: {
    onSearchKeywordChange: SearchKeywordChangeHandler;
  };
}

const [SearchFormProvider, useSearchForm] =
  createContext<SearchFormContextValue>({
    name: 'SearchFormContext',
    hookName: 'useSearchForm',
    providerName: 'SearchFormProvider',
  });

interface SearchFormProviderProps {
  children: ReactNode;
  onKeywordChangeCallback?: (keyword: string) => void;
}

export function SearchFormContextProvider({
  children,
  onKeywordChangeCallback,
}: SearchFormProviderProps) {
  const [keyword, setKeyword] = useRecoilState(keywordState);

  const onSearchKeywordChange: SearchKeywordChangeHandler = ({ value }) => {
    if (keyword !== value) {
      setKeyword(value);
      onKeywordChangeCallback?.(value);
    }
  };

  const value: SearchFormContextValue = {
    keyword,
    searchControls: {
      onSearchKeywordChange,
    },
  };

  return <SearchFormProvider value={value}>{children}</SearchFormProvider>;
}

export { useSearchForm };
export default SearchFormContextProvider;
