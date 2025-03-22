import { LabelA11Y } from '@styles/common';
import icons from '@constants/icons';
import { usePlayer } from '@contexts/PlayerContext';
import Styled from './Player.style';

function Sound() {
  const { playerState, playerControls } = usePlayer();
  const { volume, muted } = playerState;
  const { onVolumeChange } = playerControls;

  const isVolumeOff = muted || volume === 0;

  return (
    <Styled.SoundControl>
      <Styled.VolumeWrapper
        onClick={() => onVolumeChange({ value: '', isTurnOff: !isVolumeOff })}
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
        onChange={(e) => onVolumeChange({ value: e.target.value })}
      />
    </Styled.SoundControl>
  );
}

export default Sound;
