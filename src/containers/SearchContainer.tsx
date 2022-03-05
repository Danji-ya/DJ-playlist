import { useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IMusic } from '../@types/music';
import Sidebar from '../components/common/Sidebar';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import { PATH } from '../constants/path';
import useToast from '../services/hooks/useToast';
import { useGetPlaylist } from '../services/queries/player';
import { keywordState } from '../store/keywordState';
import { playerState } from '../store/playerState';
import { SearchBody, SearchBodyContainer } from '../styles/search';
import { restructuring } from '../utils/common';
import SliderContainer from './SliderContainer';

function SearchContainer() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const setPlayer = useSetRecoilState(playerState);
  const searchFormRef = useRef<React.ElementRef<typeof SearchForm>>(null);
  const navigate = useNavigate();
  const { search } = useLocation();
  const toast = useToast();

  const { data } = useGetPlaylist({
    query: keyword,
    errorHandler: (message) =>
      toast({ title: '', message, type: 'error', duration: 100000 }),
  });

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
    navigate(`${PATH.SEARCH}?query=${value}`, { replace: true });
  };

  const handleSelectMusic = (selectedMusic: IMusic) => {
    setPlayer((prev) => ({
      ...prev,
      selectedMusic,
    }));
  };

  const musicList = useMemo(() => {
    return data?.items.map((item: object) => restructuring(item));
  }, [data]);

  return (
    <SearchBodyContainer>
      <Sidebar />
      <SearchBody>
        <SearchForm
          keyword={keyword}
          ref={searchFormRef}
          handleSearchKeyword={handleSearchKeyword}
        />
        <SliderContainer handleSearchKeyword={handleSearchKeyword} />
        <SearchResult
          musicList={musicList}
          handleSelectMusic={handleSelectMusic}
        />
      </SearchBody>
    </SearchBodyContainer>
  );
}

export default SearchContainer;
