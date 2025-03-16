import SearchFormContainer from '@containers/SearchFormContainer';
import SearchResultContainer from '@containers/SearchResultContainer';
import SliderContainer from '@containers/SliderContainer';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Error from '@components/common/Error';
import { ISearchKeyword } from '@typings/search';
import { IMusic } from '@typings/music';
import { ModalHandle } from './Form';
import Styled from './Search.style';

interface Props {
  keyword: string;
  refProp: React.Ref<ModalHandle>;
  onSearchKeywordChange: ({ value, isAutoKeyword }: ISearchKeyword) => void;
  onSelectMusic: (selectedMusic: IMusic) => void;
}

function Search({
  keyword,
  refProp,
  onSearchKeywordChange,
  onSelectMusic,
}: Props) {
  return (
    <>
      <SearchFormContainer
        keyword={keyword}
        refProp={refProp}
        onSearchKeywordChange={onSearchKeywordChange}
      />
      <Styled.SliderWrapper>
        <Styled.MainTitle>인기 검색어</Styled.MainTitle>
        <SliderContainer onSearchKeywordChange={onSearchKeywordChange} />
      </Styled.SliderWrapper>
      <Styled.SearchResultWrapper>
        <Styled.MainTitle>검색 결과</Styled.MainTitle>
        <ErrorBoundary fallback={<Error />}>
          <SearchResultContainer
            keyword={keyword}
            onSelectMusic={onSelectMusic}
          />
        </ErrorBoundary>
      </Styled.SearchResultWrapper>
    </>
  );
}

export default Search;
