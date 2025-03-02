import Styled from './Player.style';
import { IMusic } from '../../@types/music';

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
