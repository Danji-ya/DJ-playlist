import { useMemo } from 'react';
import { IMusic } from '../@types/music';
import ErrorBoundary from '../components/common/ErrorBoundary';
import SearchResult from '../components/SearchResult';
import useToast from '../services/hooks/useToast';
import { useGetPlaylist } from '../services/queries/player';
import * as Styled from '../styles/search';
import { restructuring } from '../utils/common';

interface Props {
  keyword: string;
  handleSelectMusic: (music: IMusic) => void;
}

function SearchResultContainer({ keyword, handleSelectMusic }: Props) {
  const toast = useToast();

  const { data, isLoading } = useGetPlaylist({
    query: keyword,
    errorHandler: (message) =>
      toast({ title: '', message, type: 'error', duration: 5000 }),
  });

  const musicList = useMemo(() => {
    return data?.items.map((item: object) => restructuring(item));
  }, [data]);

  return (
    <Styled.SearchResultSection>
      <Styled.SearchResultTitle>검색 결과</Styled.SearchResultTitle>
      <ErrorBoundary>
        <SearchResult
          isLoading={isLoading}
          musicList={musicList}
          handleSelectMusic={handleSelectMusic}
        />
      </ErrorBoundary>
    </Styled.SearchResultSection>
  );
}

export default SearchResultContainer;
