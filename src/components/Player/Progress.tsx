import { formatTime } from '@utils/common';
import { LabelA11Y } from '@styles/common';
import Styled from './Player.style';

interface Props {
  currentTime: number;
  duration: number;
  handleProgress: (target: HTMLInputElement) => void;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
}

function Progress({
  currentTime,
  duration,
  handleProgress,
  handleMouseDown,
  handleMouseUp,
}: Props) {
  return (
    <Styled.ProgressContainer>
      <LabelA11Y htmlFor="progress">진행바</LabelA11Y>
      <Styled.CustomInputRange
        id="progress"
        type="range"
        value={currentTime}
        min="0"
        max={duration || 0}
        onChange={(e) => handleProgress(e.target)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <Styled.ProgressTime>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Styled.ProgressTime>
    </Styled.ProgressContainer>
  );
}

export default Progress;
