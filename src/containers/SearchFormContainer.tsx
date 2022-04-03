import { Ref } from 'react';
import { useRecoilState } from 'recoil';
import { ISearchKeyword } from '../@types/search';
import SearchForm, { ModalHandle } from '../components/SearchForm';
import { searchHistoryState } from '../store/searchHistoryState';

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
  const [serachHistory, setSearchHistory] = useRecoilState(searchHistoryState);

  const delSearchHistory = (idx: number) => {
    setSearchHistory((prevHistory) => [
      ...prevHistory.slice(0, idx),
      ...prevHistory.slice(idx + 1),
    ]);
  };

  return (
    <SearchForm
      keyword={keyword}
      serachHistory={serachHistory}
      ref={searchFormRef}
      handleSearchKeyword={handleSearchKeyword}
      delSearchHistory={delSearchHistory}
    />
  );
}

export default SearchFormContainer;
