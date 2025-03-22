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

export type MusicChangeHandler = (params: {
  music: Music;
  isNext?: boolean;
}) => void;

export type MusicVolumeChangeHandler = (params: {
  value: string;
  isTurnOff?: boolean;
}) => void;
