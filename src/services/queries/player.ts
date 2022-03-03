import { useQuery, UseQueryOptions } from 'react-query';
import { IMusic } from '../../@types/music';
import { QUERY_KEYS } from '../../constants/queryKeys';
import axiosInstance from '.';

interface CustomQueryOption extends UseQueryOptions<IMusic[]> {
  query: string;
  token?: string;
}

const getPlaylist = async (query: string, token: string | undefined) => {
  try {
    console.log('실제 fetch', query);
    const { data } = await axiosInstance.get('/search', {
      params: {
        q: `${query} 플레이리스트`,
        pageToken: token || '',
      },
    });

    return data;
  } catch (err) {
    throw new Error('fetch playlist error');
  }
};

export const useGetPlaylist = ({
  query,
  token,
  ...option
}: CustomQueryOption) => {
  return useQuery<any>(
    [QUERY_KEYS.PLAYLIST, query],
    () => getPlaylist(query, token),
    {
      enabled: !!query,
      staleTime: 60 * 1000 * 5,
      refetchOnWindowFocus: false,
      retry: false,
      ...option,
    },
  );
};
