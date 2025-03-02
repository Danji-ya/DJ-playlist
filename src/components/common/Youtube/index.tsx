/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { PLAYER_DEFAULT_OPTS } from '@constants/player';
import { loadIFrameApi } from '@utils/loadScript';

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
  stateChangeHandler: (event: YT.OnStateChangeEvent) => void;
}

interface State {}

class Youtube extends Component<Props, State> {
  public player: YT.Player | undefined = undefined;

  constructor(props: Props) {
    super(props);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  componentDidMount() {
    this.createYoutubePlayer();
  }

  componentDidUpdate(prevProps: Props) {
    const { customProps: prevCustomProps } = prevProps;
    const { customProps: nextCustomProps } = this.props;

    if (this.shouldUpdateVideo(prevCustomProps, nextCustomProps)) {
      const needUpdateProps = (
        Object.keys(prevCustomProps) as Array<keyof typeof prevCustomProps>
      ).filter((key) => prevCustomProps[key] !== nextCustomProps[key]);

      this.updateVideo(needUpdateProps);
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

  onPlayerStateChange(event: YT.OnStateChangeEvent) {
    const { stateChangeHandler } = this.props;
    if (stateChangeHandler) stateChangeHandler(event);
  }

  setVolume(volume: number) {
    this.player?.setVolume(volume * 100);
  }

  setMute(isMute: boolean) {
    if (isMute) {
      this.player?.mute();
    } else {
      this.player?.unMute();
    }
  }

  setPaused(isPaused: boolean) {
    if (isPaused) {
      this.player?.pauseVideo();
    } else {
      this.player?.playVideo();
    }
  }

  shouldUpdateVideo(prev: CustomProps, next: CustomProps) {
    return (
      prev.videoId !== next.videoId ||
      prev.volume !== next.volume ||
      prev.muted !== next.muted ||
      prev.paused !== next.paused
    );
  }

  updateVideo(needUpdateProps: string[]) {
    const {
      customProps: { videoId, volume, muted, paused },
    } = this.props;

    for (let i = 0; i < needUpdateProps.length; i += 1) {
      const propName = needUpdateProps[i];

      switch (propName) {
        case 'paused':
          this.setPaused(paused);
          break;
        case 'muted':
          this.setMute(muted);
          break;
        case 'volume':
          this.setVolume(volume);
          break;
        case 'videoId':
          this.player?.loadVideoById({ videoId });
          break;
        default:
      }
    }
  }

  async createYoutubePlayer() {
    const {
      width = '100',
      height = '100',
      autoplay,
      customProps: { videoId },
    } = this.props;

    try {
      const YT = await loadIFrameApi();

      this.player = new YT.Player('DJ-playlist-player', {
        videoId,
        height,
        width,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          ...PLAYER_DEFAULT_OPTS,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });
    } catch (err) {
      console.log('Player를 생성할 수 없습니다.');
    }
  }

  render() {
    return <div id="DJ-playlist-player" />;
  }
}

export default Youtube;
