import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useAppDispatch, useAppSelector } from '../store';
import { getMusicList } from '../store/modules/music';

function SearchFormContainer() {
  const keyword = useAppSelector((state) => state.music.keyword);
  const [myKeyword, setMyKeyword] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (myKeyword.length >= 1) {
      // fetch musicList
      dispatch(getMusicList(myKeyword));
    }
  };

  useEffect(() => {
    setMyKeyword(keyword);
  }, [keyword]);

  const handleChange = (value: string) => {
    setMyKeyword(value);
  };

  return (
    <SearchForm
      keyword={myKeyword}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default SearchFormContainer;
