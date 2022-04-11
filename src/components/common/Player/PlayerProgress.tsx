import * as Styled from '../../../styles/player';
import { formatTime } from '../../../utils/common';

interface Props {
  currentTime: number;
  duration: number;
  handleProgress: (target: HTMLInputElement) => void;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
}

function PlayerProgress({
  currentTime,
  duration,
  handleProgress,
  handleMouseDown,
  handleMouseUp,
}: Props) {
  return (
    <Styled.PlayerProgressContainer>
      <Styled.PlayerProgressBar
        type="range"
        value={currentTime}
        min="0"
        max={duration || 0}
        onChange={(e) => handleProgress(e.target)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <Styled.PlayerProgressTime>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Styled.PlayerProgressTime>
    </Styled.PlayerProgressContainer>
  );
}

export default PlayerProgress;
