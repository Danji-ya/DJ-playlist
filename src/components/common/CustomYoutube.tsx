/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import loadIframeApi from '../../utils/loadIframeApi';

interface CustomProps {
  videoId: string;
  volume: number;
  muted: boolean;
  paused: boolean;
}

interface Props {
  width?: string;
  height?: string;
  customProps: CustomProps;
  autoplay?: boolean;
  // for iOS inline
  playsInline?: boolean;
  stateChangeHandler: (event: YT.OnStateChangeEvent) => void;
}

interface State {}

export default class CustomYoutube extends Component<Props, State> {
  private myRef = React.createRef<HTMLDivElement>();

  public player: any = null;

  constructor(props: Props) {
    super(props);
    this.onPlayerReady = this.onPlayerReady.bind(this);
  }

  componentDidMount() {
    this.createYoutubePlayer();
  }

  componentDidUpdate(prevProps: Props) {
    // TODO: props change handle
    const { customProps } = this.props;
    if (this.shouldUpdatePlayer(prevProps.customProps, customProps)) {
      this.updatePlayer();
    }
  }

  componentWillUnmount() {
    this.player?.destroy();
  }

  onPlayerReady() {
    const {
      customProps: { volume, muted, paused },
    } = this.props;

    if (typeof volume !== 'undefined') this.setVolume(volume);
    if (typeof muted !== 'undefined') this.setMute(muted);
    if (typeof paused !== 'undefined') this.setPaused(paused);
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

  setPaused(isPaused: boolean) {
    if (isPaused) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
  }

  shouldUpdatePlayer(prev: CustomProps, next: CustomProps) {
    return (
      prev.videoId !== next.videoId ||
      prev.volume !== next.volume ||
      prev.muted !== next.muted
    );
  }

  updatePlayer() {
    console.log('update가 필요');
  }

  async createYoutubePlayer() {
    const {
      width = '360',
      height = '360',
      autoplay,
      playsInline,
      stateChangeHandler,
    } = this.props;

    try {
      const YT = await loadIframeApi();

      this.player = new YT.Player(this.myRef.current, {
        videoId: 'bHQqvYy5KYo',
        height,
        width,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          playsinline: playsInline ? 1 : 0,
          disablekb: 1,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: stateChangeHandler,
        },
      });
    } catch (err) {
      console.log('Player를 생성할 수 없습니다.');
    }
  }

  render() {
    return <div ref={this.myRef} />;
  }
}
