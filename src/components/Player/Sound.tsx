import { LabelA11Y } from '@styles/common';
import icons from '@constants/icons';
import { IMusicVolume } from '@typings/music';
import Styled from './Player.style';

interface Props {
  volume: number;
  muted: boolean;
  handleVolume: ({ value, isTurnOff }: IMusicVolume) => void;
}

function Sound({ volume, muted, handleVolume }: Props) {
  const isVolumeOff = muted || volume === 0;

  return (
    <Styled.SoundControl>
      <Styled.VolumeWrapper
        onClick={() => handleVolume({ value: '', isTurnOff: !isVolumeOff })}
      >
        {isVolumeOff ? (
          <icons.VolumeOff aria-label="music volumeUp" />
        ) : (
          <icons.VolumeUp aria-label="music volumeOff" />
        )}
      </Styled.VolumeWrapper>
      <LabelA11Y htmlFor="musicVolume">음악볼륨 조절</LabelA11Y>
      <Styled.CustomInputRange
        id="musicVolume"
        type="range"
        name="volume"
        value={volume}
        min="0"
        max="1"
        step="0.05"
        onChange={(e) => handleVolume({ value: e.target.value })}
      />
    </Styled.SoundControl>
  );
}

export default Sound;
