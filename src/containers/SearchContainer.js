import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Search from '../components/Search';

function SearchContainer() {
  const keyword = useSelector(state => state.music.keyword);
  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    if (keyword && !searchParams.get('query')) {
      history.replace(`/search?query=${keyword}`);
      return;
    }

    if (searchParams.get('query') && !keyword) history.replace(`/search`);
  }, [keyword, search]);

  return <Search />;
}

export default SearchContainer;
