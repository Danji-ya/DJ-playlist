import { IMusic } from '../../../@types/music';
import { Profile, ProfileImage, ProfileText } from '../../../styles/player';

interface Props {
  selectedMusic: IMusic;
}

function PlayerProfile({ selectedMusic }: Props) {
  return (
    <Profile>
      <ProfileImage>
        <img src={selectedMusic.url} alt="thumbnail" />
      </ProfileImage>

      <ProfileText>
        <p>{selectedMusic.title}</p>
        <p>{selectedMusic.subtitle}</p>
      </ProfileText>
    </Profile>
  );
}

export default PlayerProfile;
