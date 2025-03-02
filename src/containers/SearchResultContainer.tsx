import { useMemo } from 'react';
import Result from '@components/Search/Result';
import useToast from '@services/hooks/useToast';
import { useGetPlaylist } from '@services/queries/player';
import { restructuring } from '@utils/common';
import { IMusic } from '@typings/music';

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
    return data?.items
      .map((item: object) => restructuring(item))
      .filter(({ liveBroadcastContent }) => liveBroadcastContent !== 'live');
  }, [data]);

  return (
    <Result
      isLoading={isLoading}
      musicList={musicList}
      handleSelectMusic={handleSelectMusic}
    />
  );
}

export default SearchResultContainer;
