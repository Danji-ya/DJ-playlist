import Youtube from '@components/Youtube';
import usePlayer from '@services/hooks/usePlayer';
import usePlaylist from '@services/hooks/usePlaylist';
import { isEmptyObj } from '@utils/common';
import { H2A11Y } from '@styles/common';
import Profile from './Profile';
import Progress from './Progress';
import Styled from './Player.style';
import Controls from './Controls';
import Sound from './Sound';
import Dibs from './Dibs';

function Player() {
  const {
    playerRef,
    playerState: {
      selectedMusic,
      shuffle,
      currentTime,
      duration,
      volume,
      muted,
      paused,
    },
    playerControls: {
      onMusicChange,
      onToggleState,
      onToggleShuffle,
      onProgressChange,
      onMouseStateChange,
      onVolumeChange,
      onStateChange,
    },
  } = usePlayer();

  const {
    isIncludeDjPlaylist,
    playlistControls: { onToggleDibs },
  } = usePlaylist();

  const customProps = {
    videoId: selectedMusic.videoId,
    volume,
    muted,
    paused,
  };

  return (
    <Styled.Container>
      <H2A11Y>플레이어</H2A11Y>
      {isEmptyObj(selectedMusic) ? (
        <Styled.Empty>재생중인 음악이 없습니다</Styled.Empty>
      ) : (
        <>
          <Profile selectedMusic={selectedMusic} />

          <Controls
            paused={paused}
            selectedMusic={selectedMusic}
            shuffle={shuffle}
            onMusicChange={onMusicChange}
            onToggleState={onToggleState}
            onToggleShuffle={onToggleShuffle}
          />

          <Progress
            duration={duration}
            currentTime={currentTime}
            onProgressChange={onProgressChange}
            onMouseStateChange={onMouseStateChange}
          />

          <Sound
            volume={volume}
            muted={muted}
            onVolumeChange={onVolumeChange}
          />

          <Dibs
            dibs={isIncludeDjPlaylist(selectedMusic)}
            selectedMusic={selectedMusic}
            onToggleDibs={onToggleDibs}
          />
        </>
      )}
      <Styled.YoutubeIframe>
        <Youtube
          ref={playerRef}
          customProps={customProps}
          stateChangeHandler={onStateChange}
          autoplay
        />
      </Styled.YoutubeIframe>
    </Styled.Container>
  );
}

export default Player;
