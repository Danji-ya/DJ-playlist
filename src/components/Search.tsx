import SearchTopWordContainer from '../containers/SearchTopWordContainer';
import SearchFormContainer from '../containers/SearchFormContainer';
import SearchResultContainer from '../containers/SearchResultContainer';
import Sidebar from './common/Sidebar';
import { SearchBodyContainer, SearchBody } from '../styles/search';

function Search() {
  return (
    <SearchBodyContainer>
      <Sidebar />
      <SearchBody>
        <SearchFormContainer />
        <SearchTopWordContainer />
        <SearchResultContainer />
      </SearchBody>
    </SearchBodyContainer>
  );
}

export default Search;
