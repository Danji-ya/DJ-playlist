import SearchContainer from '@containers/SearchContainer';
import { H2A11Y } from '@styles/common';

function SearchPage() {
  return (
    <article>
      <H2A11Y>검색 본문</H2A11Y>
      <SearchContainer />
    </article>
  );
}

export default SearchPage;
