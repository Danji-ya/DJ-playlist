import { useRecoilState } from 'recoil';
import SearchForm from '../components/SearchForm';
import { searchHistoryState } from '../store/searchHistoryState';

interface Props {
  keyword: string;
  handleSearchKeyword: (value: string, isAutoKeyword?: boolean) => void;
  refProp: React.RefObject<any>;
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
