import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IMusic } from '../@types/music';
import Sidebar from '../components/common/Sidebar';
import SearchForm from '../components/SearchForm';
import { PATH } from '../constants/path';
import { keywordState } from '../store/keywordState';
import { playerState } from '../store/playerState';
import { searchHistoryState } from '../store/searchHistoryState';
import { SearchBody, SearchBodyContainer } from '../styles/search';
import { customSearchHistory } from '../utils/common';
import SearchFormContainer from './SearchFormContainer';
import SearchResultContainer from './SearchResultContainer';
import SliderContainer from './SliderContainer';

function SearchContainer() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const setSearchHistory = useSetRecoilState(searchHistoryState);
  const setPlayer = useSetRecoilState(playerState);
  const searchFormRef = useRef<React.ElementRef<typeof SearchForm>>(null);
  const navigate = useNavigate();
  const { search } = useLocation();

  // url 유지
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    if (keyword && !searchParams.get('query')) {
      navigate(`${PATH.SEARCH}?query=${keyword}`, { replace: true });
      return;
    }

    if (searchParams.get('query') && !keyword)
      navigate(PATH.SEARCH, { replace: true });
  }, [keyword, search, navigate]);

  const handleSearchKeyword = (value: string, isAutoKeyword?: boolean) => {
    if (isAutoKeyword) searchFormRef.current?.handleQuery(value);

    setKeyword(value);
    setSearchHistory((prevHistory) => customSearchHistory(value, prevHistory));
    navigate(`${PATH.SEARCH}?query=${value}`, { replace: true });
  };

  const handleSelectMusic = (selectedMusic: IMusic) => {
    setPlayer((prev) => ({
      ...prev,
      selectedMusic,
    }));
  };

  return (
    <SearchBodyContainer>
      <Sidebar />
      <SearchBody>
        <SearchFormContainer
          keyword={keyword}
          refProp={searchFormRef}
          handleSearchKeyword={handleSearchKeyword}
        />
        <SliderContainer handleSearchKeyword={handleSearchKeyword} />
        <SearchResultContainer
          keyword={keyword}
          handleSelectMusic={handleSelectMusic}
        />
      </SearchBody>
    </SearchBodyContainer>
  );
}

export default SearchContainer;
