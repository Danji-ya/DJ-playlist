import { IMusicVolume } from '../../@types/music';
import { icons } from '../../constants';
import Styled from './Player.style';

interface Props {
  volume: number;
  muted: boolean;
  handleVolume: ({ value, isTurnOff }: IMusicVolume) => void;
}

function Sound({ volume, muted, handleVolume }: Props) {
  return (
    <Styled.SoundControl>
      {muted || volume === 0 ? (
        <icons.VolumeOff
          onClick={() => handleVolume({ value: '', isTurnOff: false })}
          aria-label="music volumeUp button"
        />
      ) : (
        <icons.VolumeUp
          onClick={() => handleVolume({ value: '', isTurnOff: true })}
          aria-label="music volumeOff button"
        />
      )}
      <Styled.Input
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
