import axiosInstance from '.';

// eslint-disable-next-line import/prefer-default-export
export const fetchPlayList = async (keyword: string, token = undefined) => {
  const res = await axiosInstance.get('/search', {
    params: {
      q: `${keyword}`,
      pageToken: token || '',
    },
  });

  return res.data;
};
