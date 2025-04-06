import { useMemo } from 'react';
import useToast from '@services/hooks/useToast';
import { useGetPlaylist } from '@services/queries/player';
import { restructuring } from '@utils/common';

interface UseSearchResultProps {
  keyword: string;
}

export const useSearchResult = ({ keyword }: UseSearchResultProps) => {
  const toast = useToast();

  const { data, isLoading } = useGetPlaylist({
    query: keyword,
    errorHandler: (message) =>
      toast({ title: '', message, type: 'error', duration: 5000 }),
    suspense: true,
  });

  const musicList = useMemo(() => {
    return data?.items
      .map((item: object) => restructuring(item))
      .filter(({ liveBroadcastContent }) => liveBroadcastContent !== 'live');
  }, [data]);

  return {
    isLoading,
    musicList,
  };
};

export default useSearchResult;
