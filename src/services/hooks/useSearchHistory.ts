import { useRecoilState } from 'recoil';
import { searchHistoryState } from '@store/searchHistoryState';
import { customSearchHistory } from '@utils/common';

const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState);

  const onDeleteSearchHistory = (idx: number) => {
    setSearchHistory((prevHistory) => [
      ...prevHistory.slice(0, idx),
      ...prevHistory.slice(idx + 1),
    ]);
  };

  const onAddSearchHistory = (keyword: string) => {
    setSearchHistory((prev) => customSearchHistory(keyword, prev));
  };

  return {
    searchHistory,
    onAddSearchHistory,
    onDeleteSearchHistory,
  };
};

export default useSearchHistory;
