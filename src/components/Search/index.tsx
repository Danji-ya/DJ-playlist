import { IMusic } from '../../@types/music';
import { ISearchKeyword } from '../../@types/search';
import SearchFormContainer from '../../containers/SearchFormContainer';
import SearchResultContainer from '../../containers/SearchResultContainer';
import SliderContainer from '../../containers/SliderContainer';
import ErrorBoundary from '../common/ErrorBoundary';
import Error from '../Error';
import { ModalHandle } from './Form';
import Styled from './Search.style';

interface Props {
  keyword: string;
  refProp: React.Ref<ModalHandle>;
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
  handleSelectMusic: (selectedMusic: IMusic) => void;
}

function Search({
  keyword,
  refProp,
  handleSearchKeyword,
  handleSelectMusic,
}: Props) {
  return (
    <article>
      <SearchFormContainer
        keyword={keyword}
        refProp={refProp}
        handleSearchKeyword={handleSearchKeyword}
      />
      <Styled.SliderWrapper>
        <Styled.MainTitle>인기 검색어</Styled.MainTitle>
        <SliderContainer handleSearchKeyword={handleSearchKeyword} />
      </Styled.SliderWrapper>
      <Styled.SearchResultWrapper>
        <Styled.MainTitle>검색 결과</Styled.MainTitle>
        <ErrorBoundary fallback={<Error />}>
          <SearchResultContainer
            keyword={keyword}
            handleSelectMusic={handleSelectMusic}
          />
        </ErrorBoundary>
      </Styled.SearchResultWrapper>
    </article>
  );
}

export default Search;
