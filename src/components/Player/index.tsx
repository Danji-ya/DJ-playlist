import Youtube from '@components/Youtube';
import { usePlayer } from '@contexts/PlayerContext';
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
    playerState: { selectedMusic, volume, muted, paused },
    playerControls: { onStateChange },
  } = usePlayer();

  const customProps = {
    videoId: selectedMusic.videoId,
    volume,
    muted,
    paused,
  };

  return (
    <Styled.Container>
      <H2A11Y>Player</H2A11Y>
      {isEmptyObj(selectedMusic) ? (
        <Styled.Empty>No music is playing</Styled.Empty>
      ) : (
        <>
          <Profile />
          <Controls />
          <Progress />
          <Sound />
          <Dibs />
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
