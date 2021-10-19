import React from 'react';
import {
  PlayerProgressBar,
  PlayerProgressContainer,
  PlayerProgressTime,
} from '../../styles/playerStyle';
import { formatTime } from '../../util/utils';

function PlayerProgress({ currentTime, duration, handleProgress, handleMouseDown, handleMouseUp }) {
  return (
    <PlayerProgressContainer>
      <PlayerProgressBar
        type="range"
        value={currentTime}
        min="0"
        max={duration || 0}
        onChange={e => handleProgress(e.target)}
        onMouseDown={e => handleMouseDown(e.target)}
        onMouseUp={e => handleMouseUp(e.target)}
      />
      <PlayerProgressTime>
        {formatTime(currentTime)} / {formatTime(duration)}
      </PlayerProgressTime>
    </PlayerProgressContainer>
  );
}

export default PlayerProgress;
