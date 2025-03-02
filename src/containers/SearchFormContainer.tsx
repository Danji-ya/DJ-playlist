import { Ref } from 'react';
import { useRecoilState } from 'recoil';
import Form, { ModalHandle } from '@components/Search/Form';
import { searchHistoryState } from '@store/searchHistoryState';
import { ISearchKeyword } from '../@types/search';

interface Props {
  keyword: string;
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
  refProp: Ref<ModalHandle>;
}

function SearchFormContainer({
  keyword,
  handleSearchKeyword,
  refProp: searchFormRef,
}: Props) {
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState);

  const delSearchHistory = (idx: number) => {
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
      handleSearchKeyword={handleSearchKeyword}
      delSearchHistory={delSearchHistory}
    />
  );
}

export default SearchFormContainer;
