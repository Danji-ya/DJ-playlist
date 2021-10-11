import axios from 'axios';

const url = 'https://www.googleapis.com/youtube/v3';
const KEY = process.env.REACT_APP_YOUTUBE_DATA_KEY;

const axiosInstance = axios.create({
  baseURL: url,
  params: {
    part: 'snippet',
    fields: 'nextPageToken, items(id,snippet(title,channelTitle,description,thumbnails))',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});

export default axiosInstance;
