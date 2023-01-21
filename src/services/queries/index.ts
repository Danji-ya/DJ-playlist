import axios from 'axios';

const url = 'https://www.googleapis.com/youtube/v3';

const axiosInstance = axios.create({
  baseURL: url,
  params: {
    part: 'snippet',
    fields:
      'nextPageToken, items(id,snippet(title,channelTitle,description,thumbnails,liveBroadcastContent))',
    type: 'video',
    maxResults: 50,
    videoEmbeddable: true,
    key: process.env.YOUTUBE_DATA_KEY,
  },
});

export default axiosInstance;
