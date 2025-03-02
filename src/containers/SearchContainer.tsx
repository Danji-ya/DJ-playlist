import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Search from '@components/Search';
import Form from '@components/Search/Form';
import { PATH } from '@constants/path';
import { keywordState } from '@store/keywordState';
import { playerState } from '@store/playerState';
import { searchHistoryState } from '@store/searchHistoryState';
import { customSearchHistory } from '@utils/common';
import { IMusic } from '@typings/music';
import { ISearchKeyword } from '@typings/search';

function SearchContainer() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const setSearchHistory = useSetRecoilState(searchHistoryState);
  const setPlayer = useSetRecoilState(playerState);
  const FormRef = useRef<React.ElementRef<typeof Form>>(null);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    if (keyword && !searchParams.get('query')) {
      navigate(`${PATH.SEARCH}?query=${keyword}`, { replace: true });
      return;
    }

    if (searchParams.get('query') && !keyword)
      navigate(PATH.SEARCH, { replace: true });
  }, [keyword, search, navigate]);

  const handleSearchKeyword = ({ value, isAutoKeyword }: ISearchKeyword) => {
    if (isAutoKeyword) FormRef.current?.handleQuery(value);

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
    <Search
      keyword={keyword}
      refProp={FormRef}
      handleSearchKeyword={handleSearchKeyword}
      handleSelectMusic={handleSelectMusic}
    />
  );
}

export default SearchContainer;
