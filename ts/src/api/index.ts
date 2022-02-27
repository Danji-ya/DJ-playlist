import axios from 'axios';

const url = 'https://www.googleapis.com/youtube/v3';

const axiosInstance = axios.create({
  baseURL: url,
  params: {
    part: 'snippet',
    fields:
      'nextPageToken, items(id,snippet(title,channelTitle,description,thumbnails))',
    type: 'video',
    maxResults: 50,
    key: process.env.YOUTUBE_DATA_KEY,
  },
});

export const axiosDefaultInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default axiosInstance;
