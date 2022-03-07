import { useMemo } from 'react';
import { IMusic } from '../@types/music';
import SearchResult from '../components/SearchResult';
import useToast from '../services/hooks/useToast';
import { useGetPlaylist } from '../services/queries/player';
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
    <SearchResult
      isLoading={isLoading}
      musicList={musicList}
      handleSelectMusic={handleSelectMusic}
    />
  );
}

export default SearchResultContainer;
