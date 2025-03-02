import type { IMusic } from '@typings/music';
import Styled from './Player.style';

interface Props {
  selectedMusic: IMusic;
}

function Profile({ selectedMusic }: Props) {
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
