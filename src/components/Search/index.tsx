import SearchFormContainer from '@containers/SearchFormContainer';
import SearchResultContainer from '@containers/SearchResultContainer';
import SliderContainer from '@containers/SliderContainer';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Error from '@components/Error';
import { ISearchKeyword } from '@typings/search';
import { IMusic } from '@typings/music';
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
    <>
      <SearchFormContainer
        keyword={keyword}
        refProp={refProp}
        handleSearchKeyword={handleSearchKeyword}
      />
      <Styled.SliderWrapper>
        <Styled.MainTitle>Top searched</Styled.MainTitle>
        <SliderContainer handleSearchKeyword={handleSearchKeyword} />
      </Styled.SliderWrapper>
      <Styled.SearchResultWrapper>
        <Styled.MainTitle>Search result</Styled.MainTitle>
        <ErrorBoundary fallback={<Error />}>
          <SearchResultContainer
            keyword={keyword}
            handleSelectMusic={handleSelectMusic}
          />
        </ErrorBoundary>
      </Styled.SearchResultWrapper>
    </>
  );
}

export default Search;
