import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import { getMusicList, setKeyword } from '../store/modules/music';

function SearchFormContainer() {
  const keyword = useSelector(state => state.music.keyword);
  const [myKeyword, setMyKeyword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (myKeyword.length >= 1) {
      dispatch(setKeyword(myKeyword));

      // fetch musicList
      dispatch(getMusicList(myKeyword));
      history.push(`/search?query=${myKeyword}`);
    }
  };

  useEffect(() => {
    setMyKeyword(keyword);
  }, [keyword]);

  const handleChange = value => {
    setMyKeyword(value);
  };

  return <SearchForm keyword={myKeyword} handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default SearchFormContainer;
