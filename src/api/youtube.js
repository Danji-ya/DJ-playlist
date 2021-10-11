import axiosInstance from '.';

// eslint-disable-next-line import/prefer-default-export
export const fetchPlayList = async (keyword, token) => {
  const res = await axiosInstance.get('/search', {
    params: {
      q: keyword,
      pageToken: token || '',
    },
  });

  return res.data;
};
