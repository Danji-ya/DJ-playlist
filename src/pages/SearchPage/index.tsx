import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Search from '@components/Search';
import { keywordState } from '@store/keywordState';
import { PATH } from '@constants/path';
import { H2A11Y } from '@styles/common';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchPage() {
  const [keyword] = useRecoilState(keywordState);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const queryParam = searchParams.get('query');

    if (keyword && keyword !== queryParam) {
      navigate(`${PATH.SEARCH}?query=${keyword}`, { replace: true });
      return;
    }

    if ((queryParam && !keyword) || (!queryParam && !keyword)) {
      navigate(PATH.SEARCH, { replace: true });
    }
  }, [keyword, search, navigate]);

  return (
    <article>
      <H2A11Y>검색 본문</H2A11Y>
      <Search />
    </article>
  );
}

export default SearchPage;
