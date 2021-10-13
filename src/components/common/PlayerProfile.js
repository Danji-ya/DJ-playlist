import React from 'react';
import { Profile, ProfileImage, ProfileText } from '../../styles/PlayerStyle';

function PlayerProfile({ selectedMusic }) {
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
