import styled from 'styled-components';

const PlayerContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: rgb(34, 34, 34);
  padding: 10px 25px;
  align-items: center;
`;

const PlayerEmpty = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 2px;
  width: 100%;
  height: 100%;
  letter-spacing: 5px;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 60px;
`;

const Profile = styled.div`
  position: relative;
  width: 350px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: 70px;
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

const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5%;
`;

const PlayerPrevButton = styled.button`
  border: none;
  outline: none;
  color: white;
  background: transparent;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

const PlayerNextButton = styled(PlayerPrevButton)``;

const PlayerMainButton = styled.button`
  background: rgba(255, 255, 255, 1);
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  margin: 0 10px;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: black;
  }

  &:hover {
    cursor: pointer;
  }
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.32);
`;

const PlayerProgressContainer = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const PlayerProgressTime = styled.p`
  position: absolute;
  font-size: 0.8rem;
  margin: 1vh 0;
`;

const PlayerProgressBar = styled.input.attrs(({ value, max }) => ({
  style: {
    backgroundSize: `${(value / max) * 100}% 100%`,
  },
}))`
  border-radius: 5px;
  background-image: linear-gradient(#44bf9a, #44bf9a);
  background-repeat: no-repeat;

  width: 100%;
  height: 6px;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 12px;
    width: 12px;
    background: #44bfa3;
    border-radius: 100%;
    opacity: 0;
  }
  &:hover {
    &::-webkit-slider-thumb {
      opacity: 1;
    }
  }

  -webkit-appearance: none;
`;

const PlayerSoundControlWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5%;
  cursor: pointer;
`;

const YoutubeIframe = styled.div`
  position: fixed;
  bottom: -1000px;
`;

const PlayerSoundControl = styled.input.attrs(({ value }) => ({
  style: {
    backgroundSize: `${value * 100}% 100%`,
  },
}))`
  border-radius: 5px;
  background-image: linear-gradient(#44bf9a, #44bf9a);
  background-repeat: no-repeat;

  width: 100px;
  height: 5px;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 12px;
    width: 12px;
    background: #44bfa3;
    border-radius: 100%;
    opacity: 0;
  }
  &:hover {
    &::-webkit-slider-thumb {
      opacity: 1;
    }
  }

  -webkit-appearance: none;
`;

const AddButton = styled.button`
  border: none;
  outline: none;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;

  &:hover {
    background: rgba(165, 165, 165, 0.3);
    cursor: pointer;
  }

  svg {
    fill: ${({ dibs }) => (dibs ? ' #44bf9a' : 'white')};
  }
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.32);
`;

export {
  PlayerContainer,
  PlayerEmpty,
  Profile,
  ProfileImage,
  ProfileText,
  PlayerControls,
  PlayerPrevButton,
  PlayerNextButton,
  PlayerMainButton,
  PlayerProgressContainer,
  PlayerProgressBar,
  PlayerProgressTime,
  PlayerSoundControlWrapper,
  PlayerSoundControl,
  YoutubeIframe,
  AddButton,
};
