import styled from 'styled-components';

const PlayerContainer = styled.div`
  background: ${({ theme }) => `${theme.playerBg}`};
  border-top: ${({ theme }) => `${theme.playerBorder}`};
  display: flex;
  position: fixed;
  z-index: 998;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 10px 50px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const PlayerEmpty = styled.div`
  color: ${({ theme }) => theme.converseColor};
  font-family: 'BMHANNAPro', sans-serif;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 2px;
  width: 100%;
  height: 100%;
  letter-spacing: 5px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 60px;
`;

const Profile = styled.div`
  position: relative;
  width: 350px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
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

  @media (max-width: 1024px) {
    margin: 0 0;
  }
`;

const PlayerPrevButton = styled.button`
  border: none;
  outline: none;
  color: white;
  background: transparent;

  svg {
    fill: ${({ theme }) => theme.playerBtn};
    &:hover {
      cursor: pointer;
    }
  }
`;

const PlayerNextButton = styled(PlayerPrevButton)``;

const PlayerMainButton = styled.button`
  background: ${({ theme }) => theme.playerBtnBg};
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
    color: ${({ theme }) => theme.playerMainBtn};
  }

  &:hover {
    cursor: pointer;
  }
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.32);
`;

const PlayerProgressContainer = styled.div`
  position: relative;
  width: 500px;
  min-width: 150px;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 480px) {
    display: none;
  }
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
  background: ${({ theme }) => `${theme.playerSubColor}`};
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.playerMainColor}, ${theme.playerMainColor})`};
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
    background: ${({ theme }) => `${theme.playerMainColor}`};
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

  svg {
    fill: ${({ theme }) => `${theme.playerSoundBtn}`};
  }

  @media (max-width: 768px) {
    display: none;
  }
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
  background: ${({ theme }) => `${theme.playerSubColor}`};
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.playerMainColor}, ${theme.playerMainColor})`};

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
    background: ${({ theme }) => `${theme.playerMainColor}`};
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
    fill: ${({ dibs, theme }) => (dibs ? `${theme.playerMainColor}` : `${theme.playerSubColor}`)};
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
