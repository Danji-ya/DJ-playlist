export interface Music {
  videoId: string;
  title: string;
  subtitle: string;
  url: string;
}

export interface YouTubeSearchResponse {
  nextPageToken: string;
  items: Music[];
}
