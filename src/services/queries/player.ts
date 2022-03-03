/* eslint-disable import/prefer-default-export */
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
    // const { data } = await axiosInstance.get('/search', {
    //   params: {
    //     q: `${query}`,
    //     pageToken: token || '',
    //   },
    // });

    const data = {
      items: [
        {
          id: { videoId: 'YlY2CJaErdE' },
          snippet: {
            title: '아이유 노래모음 30곡 (가사포함)',
            channelTitle: '밤공원 𝙋𝙇𝘼𝙔𝙇𝙄𝙎𝙏',
            thumbnails: {
              high: { url: 'https://i.ytimg.com/vi/YlY2CJaErdE/hqdefault.jpg' },
            },
          },
        },
      ],
    };
    // const data = {
    //   items: [],
    // };

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
    { enabled: !!query, retry: false, ...option },
  );
};
