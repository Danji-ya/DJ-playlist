import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@constants/queryKeys';
import CustomError from '@utils/customError';
import { MESSAGE } from '@constants/messages';
import axiosInstance from '@services/queries/base';
import { YouTubeSearchResponse } from '@typings/music';

interface CustomQueryParams {
  query: string;
  token?: string;
  errorHandler: (message: string) => void;
  suspense?: boolean;
}

const getPlaylist = async (
  query: string,
  token: string | undefined,
  errorHandler: (message: string) => void,
) => {
  try {
    const { data } = await axiosInstance.get<YouTubeSearchResponse>('/search', {
      params: {
        q: `${query} playlist`,
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
  suspense,
}: CustomQueryParams) => {
  return useQuery<YouTubeSearchResponse>(
    [QUERY_KEYS.PLAYLIST, query],
    () => getPlaylist(query, token, errorHandler),
    {
      enabled: !!query,
      staleTime: 60 * 1000 * 5,
      refetchOnWindowFocus: false,
      retry: false,
      useErrorBoundary: true,
      suspense,
    },
  );
};
