import { useQuery } from 'react-query';
import { IMusicData } from '../../@types/music';
import { QUERY_KEYS } from '../../constants/queryKeys';
import axiosInstance from '.';
import CustomError from '../../utils/customError';
import { MESSAGE } from '../../constants/messages';

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
    // const { data } = await axiosInstance.get<IMusicData>('/search', {
    //   params: {
    //     q: `${query} 플레이리스트`,
    //     pageToken: token || '',
    //   },
    // });

    const data = {
      items: [
        {
          id: {
            kind: 'youtube#video',
            videoId: '3Iy8SKJUADw',
          },
          snippet: {
            title: '[뽀로로 3기] 41회~44회 연속보기 (11/13)',
            description:
              '뽀로로의 새로운 영상을 가장 빠르게 만나는 방법! 지금 바로 뽀롱뽀롱 뽀로로 공식 유튜브 채널 [구독]버튼을 눌러주세요. ☆뽀로로 ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/3Iy8SKJUADw/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/3Iy8SKJUADw/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/3Iy8SKJUADw/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: '뽀로로(Pororo)',
          },
        },
        {
          id: {
            kind: 'youtube#video',
            videoId: 'dfGcVX5ljiw',
          },
          snippet: {
            title: 'super mario 64 bloopers: Who let the chomp out?',
            description:
              'CHECKOUT MY NEW ANIMATION CHANNEL FOR MORE SPICY CONTENT! ▻ https://youtube.com/glitchprod Mario and SMG4 ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/dfGcVX5ljiw/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/dfGcVX5ljiw/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/dfGcVX5ljiw/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'SMG4',
          },
        },
      ],
    };

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
  return useQuery<any>(
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

// export const useGetPlaylist = ({
//   query,
//   token,
//   errorHandler,
// }: CustomQueryParams) => {
//   return useQuery<IMusicData | undefined>(
//     [QUERY_KEYS.PLAYLIST, query],
//     () => getPlaylist(query, token, errorHandler),
//     {
//       enabled: !!query,
//       staleTime: 60 * 1000 * 5,
//       refetchOnWindowFocus: false,
//       retry: false,
//       useErrorBoundary: true,
//     },
//   );
// };
