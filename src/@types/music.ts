export interface IMusic {
  videoId: string;
  title: string;
  subtitle: string;
  url: string;
}

export interface ISwapRoute {
  oriIdx: number;
  desIdx: number;
}

export interface IMusicData {
  nextPageToken: string;
  items: IMusic[];
}

export interface IMusicChange {
  music: IMusic;
  isNext?: boolean;
}

export interface IMusicVolume {
  value: string;
  isTurnOff?: boolean;
}
