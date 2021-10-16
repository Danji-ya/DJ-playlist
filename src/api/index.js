import axios from 'axios';

const url = 'https://www.googleapis.com/youtube/v3';
const KEY = process.env.REACT_APP_YOUTUBE_DATA_KEY;

const axiosInstance = axios.create({
  baseURL: url,
  params: {
    part: 'snippet',
    fields: 'nextPageToken, items(id,snippet(title,channelTitle,description,thumbnails))',
    type: 'video',
    maxResults: 50,
    key: KEY,
  },
});

export const axiosDefaultInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:3000/',
});

export default axiosInstance;
