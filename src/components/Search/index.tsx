import Slider from '@components/Slider';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Error from '@components/common/Error';
import useSearchForm from '@services/hooks/useSearchForm';
import useSearchHistory from '@services/hooks/useSearchHistory';
import useSearchResult from '@services/hooks/useSearchResult';
import { usePlaylist } from '@services/hooks/usePlaylist';
import Result from './Result';
import Form from './Form';
import Styled from './Search.style';

function Search() {
  const { searchHistory, onAddSearchHistory, onDeleteSearchHistory } =
    useSearchHistory();

  const { keyword, formRef, onSearchKeywordChange } = useSearchForm({
    onAddSearchHistory,
  });

  const {
    playlistControls: { onSelectMusic },
  } = usePlaylist();

  const { isLoading, musicList } = useSearchResult({
    keyword,
  });

  return (
    <>
      <Form
        ref={formRef}
        keyword={keyword}
        searchHistory={searchHistory}
        onSearchKeywordChange={onSearchKeywordChange}
        onDeleteSearchHistory={onDeleteSearchHistory}
      />
      <Styled.SliderWrapper>
        <Styled.MainTitle>인기 검색어</Styled.MainTitle>
        <Slider onSearchKeywordChange={onSearchKeywordChange} />
      </Styled.SliderWrapper>
      <Styled.SearchResultWrapper>
        <Styled.MainTitle>검색 결과</Styled.MainTitle>
        <ErrorBoundary fallback={<Error />}>
          <Result
            isLoading={isLoading}
            musicList={musicList}
            onSelectMusic={onSelectMusic}
          />
        </ErrorBoundary>
      </Styled.SearchResultWrapper>
    </>
  );
}

export default Search;
