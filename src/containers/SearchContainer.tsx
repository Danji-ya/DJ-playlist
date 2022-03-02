import { useEffect, useMemo, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { IMusic } from '../@types/music';
import Sidebar from '../components/common/Sidebar';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import { useGetPlaylist } from '../services/queries/player';
import { useAppDispatch, useAppSelector } from '../store';
import { setKeyword, setSelectedMusic } from '../store/modules/music';
import { SearchBody, SearchBodyContainer } from '../styles/search';
import { restructuring } from '../utils/common';
import SliderContainer from './SliderContainer';

function SearchContainer() {
  const keyword = useAppSelector((state) => state.music.keyword);
  const [query, setQuery] = useState(keyword);
  const history = useHistory();
  const { search } = useLocation();
  const dispatch = useAppDispatch();

  const { data } = useGetPlaylist({
    query: keyword,
    staleTime: 60 * 1000 * 5,
    onSuccess: (res) => {
      // TODO: 바꿔야 할 부분
      console.log(res);
    },
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

  const handleSearchKeyword = (value: string) => {
    setQuery(value);
    dispatch(setKeyword(value));
    history.replace(`/search?query=${value}`);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();

    if (query.length === 0) return;
    if (keyword === query) return;

    handleSearchKeyword(query);
  };

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleSelectMusic = (music: IMusic) => {
    dispatch(setSelectedMusic(music));
  };

  const musicList = useMemo(() => {
    return data?.items.map((item: any) => restructuring(item));
  }, [data]);

  return (
    <SearchBodyContainer>
      <Sidebar />
      <SearchBody>
        <SearchForm
          keyword={query}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
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
