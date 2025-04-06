import { usePlayer } from '@contexts/PlayerContext';
import Styled from './Player.style';

function Profile() {
  const { playerState } = usePlayer();
  const { selectedMusic } = playerState;

  return (
    <Styled.Profile>
      <Styled.ProfileImage>
        <img src={selectedMusic.url} alt="thumbnail" />
      </Styled.ProfileImage>

      <Styled.ProfileText>
        <p>{selectedMusic.title}</p>
        <p>{selectedMusic.subtitle}</p>
      </Styled.ProfileText>
    </Styled.Profile>
  );
}

export default Profile;
