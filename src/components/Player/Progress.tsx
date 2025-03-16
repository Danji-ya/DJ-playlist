import { formatTime } from '@utils/common';
import { LabelA11Y } from '@styles/common';
import Styled from './Player.style';

interface Props {
  currentTime: number;
  duration: number;
  onProgressChange: (target: HTMLInputElement) => void;
  onMouseStateChange: (isDown?: boolean) => void;
}

function Progress({
  currentTime,
  duration,
  onProgressChange,
  onMouseStateChange,
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
