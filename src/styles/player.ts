import styled from 'styled-components';
import { STYLE } from '../constants';
import { DEVICE } from '../constants/device';

const PlayerContainer = styled.div`
  background: ${({ theme }) => `${theme.playerBg}`};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  position: fixed;
  z-index: 998;
  bottom: 0;
  width: 100%;
  height: ${STYLE.PLAYER_HEIGHT};
  padding: 10px 50px;
  align-items: center;
  justify-content: space-around;

  @media ${DEVICE.DESKTOP} {
    justify-content: space-between;
  }
`;

const PlayerEmpty = styled.div`
  color: ${({ theme }) => theme.navTextPrimary};
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
  @media ${DEVICE.MOBILE} {
    font-size: 1rem;
  }
`;

const Profile = styled.div`
  position: relative;
  width: 350px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media ${DEVICE.DESKTOP} {
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

  @media ${DEVICE.DESKTOP} {
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
  border: none;
  outline: none;
  width: 35px;
  height: 35px;
  margin: 0 10px;
  padding: 0;
  border-radius: 50%;
  background: transparent;
  svg {
    fill: ${({ theme }) => theme.playerBtn};
    &:hover {
      cursor: pointer;
    }
  }
`;

const PlayerProgressContainer = styled.div`
  position: relative;
  width: 500px;
  min-width: 150px;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${DEVICE.MOBILE} {
    display: none;
  }
`;

const PlayerProgressTime = styled.p`
  position: absolute;
  font-size: 0.8rem;
  margin: 1vh 0;
`;

const PlayerProgressBar = styled.input.attrs(
  ({ value, max }: { value: number; max: number }) => ({
    style: {
      backgroundSize: `${(value / max) * 100}% 100%`,
    },
  }),
)`
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

  @media ${DEVICE.TABLET} {
    display: none;
  }
`;

const YoutubeIframe = styled.div`
  position: fixed;
  bottom: -1000px;
`;

const PlayerSoundControl = styled.input.attrs(
  ({ value }: { value: number }) => ({
    style: {
      backgroundSize: `${value * 100}% 100%`,
    },
  }),
)`
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

const AddButton = styled.button<{ dibs: boolean }>`
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  padding: 5px 0 0 0;
  background: transparent;

  &:hover {
    cursor: pointer;
    background: rgba(65, 65, 65, 0.3);
  }

  svg {
    fill: ${({ dibs, theme }) =>
      dibs ? `${theme.playerMainColor}` : `${theme.playerSubColor}`};
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
