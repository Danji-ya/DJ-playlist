import { Ref } from 'react';
import { useRecoilState } from 'recoil';
import Form, { ModalHandle } from '@components/Search/Form';
import { searchHistoryState } from '@store/searchHistoryState';
import { ISearchKeyword } from '@typings/search';

interface Props {
  keyword: string;
  onSearchKeywordChange: ({ value, isAutoKeyword }: ISearchKeyword) => void;
  refProp: Ref<ModalHandle>;
}

function SearchFormContainer({
  keyword,
  onSearchKeywordChange,
  refProp: searchFormRef,
}: Props) {
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState);

  const onDeleteSearchHistory = (idx: number) => {
    setSearchHistory((prevHistory) => [
      ...prevHistory.slice(0, idx),
      ...prevHistory.slice(idx + 1),
    ]);
  };

  return (
    <Form
      keyword={keyword}
      searchHistory={searchHistory}
      ref={searchFormRef}
      onSearchKeywordChange={onSearchKeywordChange}
      onDeleteSearchHistory={onDeleteSearchHistory}
    />
  );
}

export default SearchFormContainer;
