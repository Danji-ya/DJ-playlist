import React from 'react';
import {
  PlayerProgressBar,
  PlayerProgressContainer,
  PlayerProgressTime,
} from '../../styles/PlayerStyle';
import { formatTime } from '../../util/utils';

function PlayerProgress({ currentTime, duration, handleProgress }) {
  return (
    <PlayerProgressContainer>
      <PlayerProgressBar
        type="range"
        value={currentTime}
        min="0"
        max={duration || ''}
        onClick={e => handleProgress(e.target)}
        onChange={e => handleProgress(e.target)}
      />
      <PlayerProgressTime>
        {formatTime(currentTime)} / {formatTime(duration)}
      </PlayerProgressTime>
    </PlayerProgressContainer>
  );
}

export default PlayerProgress;
