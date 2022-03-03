import { useEffect, useMemo, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IMusic } from '../@types/music';
import Sidebar from '../components/common/Sidebar';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
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
  const history = useHistory();
  const { search } = useLocation();

  const { data } = useGetPlaylist({
    query: keyword,
    onError: () => {
      // TODO: 에러핸들링
      console.log('실패시');
    },
  });

  // url 유지
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    if (keyword && !searchParams.get('query')) {
      history.replace(`/search?query=${keyword}`);
      return;
    }

    if (searchParams.get('query') && !keyword) history.replace(`/search`);
  }, [keyword, search, history]);

  const handleSearchKeyword = (value: string, isAutoKeyword?: boolean) => {
    if (isAutoKeyword) searchFormRef.current?.handleQuery(value);

    setKeyword(value);
    history.replace(`/search?query=${value}`);
  };

  const handleSelectMusic = (selectedMusic: IMusic) => {
    setPlayer((prev) => ({
      ...prev,
      selectedMusic,
    }));
  };

  const musicList = useMemo(() => {
    return data?.items.map((item: any) => restructuring(item));
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
