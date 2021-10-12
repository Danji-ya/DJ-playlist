import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
const ProfileImage = styled.div`
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

const ProfileText = styled.div`
  margin-left: 10px;
  font-size: 0.8rem;

  // title & subtitle
  & > p {
    &:first-of-type {
      font-weight: 600;
    }

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.5rem;
    overflow: hidden;
  }
`;

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
