import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import { useGetPlaylist } from '../services/queries/player';
import { useAppDispatch, useAppSelector } from '../store';
import { getMusicListSuccess, setKeyword } from '../store/modules/music';

function SearchFormContainer() {
  const keyword = useAppSelector((state) => state.music.keyword);
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const history = useHistory();

  // TODO: Form, TopWord 중복 삭제
  // Form에서는 입력마다 query가 바뀌고 handleSubmit 일때만 refetch
  // TopWord에서는 카드 클릭하여 setState 동작하여 query가 바뀌면 refetch
  // 하나로 어떻게 통합할지
  // 전역으로 관리하는 keyword는 검색기록 관리차원
  const { refetch } = useGetPlaylist({
    query: keyword,
    onSuccess: (data) => {
      // TODO: 바꿔야 할 부분
      console.log(data);
      dispatch(getMusicListSuccess(data));
    },
    onError: () => {
      // TODO: 에러핸들링
      console.log('실패시');
    },
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();

    if (query.length === 0) return;
    if (keyword === query) return;

    dispatch(setKeyword(query));
    history.replace(`/search?query=${query}`);
  };

  useEffect(() => {
    setQuery(keyword);
  }, [keyword]);

  const handleChange = (value: string) => {
    setQuery(value);
  };

  return (
    <SearchForm
      keyword={query}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default SearchFormContainer;
