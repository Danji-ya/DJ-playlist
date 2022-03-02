import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Search from '../components/Search';
import { useAppSelector } from '../store';

function SearchContainer() {
  const keyword = useAppSelector((state) => state.music.keyword);
  const history = useHistory();
  const { search } = useLocation();

  // url 유지
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    if (keyword && !searchParams.get('query')) {
      history.replace(`/search?query=${keyword}`);
      return;
    }

    if (searchParams.get('query') && !keyword) history.replace(`/search`);
  }, [keyword, search, history]);

  return <Search />;
}

export default SearchContainer;
