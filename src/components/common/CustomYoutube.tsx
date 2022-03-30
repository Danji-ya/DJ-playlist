/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import loadIframeApi from '../../utils/loadIframeApi';

interface Props {
  videoId: string;
  width?: string;
  height?: string;
  volume: number;
  muted: boolean;
  autoplay?: boolean;
  // for iOS inline
  playsInline?: boolean;
}

interface State {}

export default class CustomYoutube extends Component<Props, State> {
  private myRef = React.createRef<HTMLDivElement>();

  public player: any = null;

  constructor(props: Props) {
    super(props);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  componentDidMount() {
    this.createYoutubePlayer();
  }

  onPlayerReady() {
    const { volume, muted } = this.props;

    if (typeof volume !== 'undefined') this.setVolume(volume);
    if (typeof muted !== 'undefined') this.setMute(muted);
  }

  onPlayerStateChange(event: any) {
    console.log('state change', event);
  }

  setVolume(volume: number) {
    this.player.setVolume(volume * 100);
  }

  setMute(isMute: boolean) {
    if (isMute) {
      this.player.mute();
    } else {
      this.player.unMute();
    }
  }

  async createYoutubePlayer() {
    const {
      videoId = 'M7lc1UVf-VE',
      width = '360',
      height = '360',
      autoplay,
      playsInline,
    } = this.props;

    try {
      const YT = await loadIframeApi();

      this.player = new YT.Player(this.myRef.current, {
        videoId,
        height,
        width,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          playsinline: playsInline ? 1 : 0,
          disablekb: 1,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });

      // TODO: 이벤트 리스너 추가
    } catch (err) {
      console.log('Player를 생성할 수 없습니다.');
    }
  }

  render() {
    return <div ref={this.myRef} />;
  }
}
