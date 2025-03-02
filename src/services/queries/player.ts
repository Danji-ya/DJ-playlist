import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@constants/queryKeys';
import CustomError from '@utils/customError';
import { MESSAGE } from '@constants/messages';
import axiosInstance from '@services/queries/base';
import { IMusicData } from '../../@types/music';

interface CustomQueryParams {
  query: string;
  token?: string;
  errorHandler: (message: string) => void;
}

const getPlaylist = async (
  query: string,
  token: string | undefined,
  errorHandler: (message: string) => void,
) => {
  try {
    const { data } = await axiosInstance.get<IMusicData>('/search', {
      params: {
        q: `${query} 플레이리스트`,
        pageToken: token || '',
      },
    });

    return data;
  } catch (err) {
    throw new CustomError(MESSAGE.FETCH_YOUTUBE_FAIL, errorHandler);
  }
};

export const useGetPlaylist = ({
  query,
  token,
  errorHandler,
}: CustomQueryParams) => {
  return useQuery<IMusicData | undefined>(
    [QUERY_KEYS.PLAYLIST, query],
    () => getPlaylist(query, token, errorHandler),
    {
      enabled: !!query,
      staleTime: 60 * 1000 * 5,
      refetchOnWindowFocus: false,
      retry: false,
      useErrorBoundary: true,
    },
  );
};
