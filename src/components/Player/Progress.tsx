import { usePlayer } from '@contexts/PlayerContext';
import { formatTime } from '@utils/common';
import { LabelA11Y } from '@styles/common';
import Styled from './Player.style';

function Progress() {
  const { playerState, playerControls } = usePlayer();
  const { currentTime, duration } = playerState;
  const { onProgressChange, onMouseStateChange } = playerControls;

  return (
    <Styled.ProgressContainer>
      <LabelA11Y htmlFor="progress">Progress Bar</LabelA11Y>
      <Styled.CustomInputRange
        id="progress"
        type="range"
        value={currentTime}
        min="0"
        max={duration || 0}
        onChange={(e) => onProgressChange(e.target)}
        onMouseDown={() => onMouseStateChange(true)}
        onMouseUp={() => onMouseStateChange(false)}
      />
      <Styled.ProgressTime>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Styled.ProgressTime>
    </Styled.ProgressContainer>
  );
}

export default Progress;
