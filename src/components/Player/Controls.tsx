import icons from '@constants/icons';
import { usePlayer } from '@contexts/PlayerContext';
import Styled from './Player.style';

function Controls() {
  const { playerState, playerControls } = usePlayer();
  const { paused, selectedMusic, shuffle } = playerState;
  const { onMusicChange, onToggleState, onToggleShuffle } = playerControls;

  return (
    <Styled.Controls>
      <Styled.PrevButton
        onClick={() => onMusicChange({ music: selectedMusic })}
        aria-label="music play prev"
      >
        <icons.Prev size={30} />
      </Styled.PrevButton>

      <Styled.MainButton
        onClick={onToggleState}
        aria-label="music play state"
        data-testid={paused ? 'play-button' : 'pause-button'}
      >
        {paused ? (
          <icons.Play width={35} height={35} />
        ) : (
          <icons.Pause width={35} height={35} />
        )}
      </Styled.MainButton>

      <Styled.NextButton
        onClick={() => onMusicChange({ music: selectedMusic, isNext: true })}
        aria-label="music play next"
      >
        <icons.Next />
      </Styled.NextButton>
      <Styled.ShuffleButton
        shuffle={shuffle}
        onClick={onToggleShuffle}
        aria-label="shuffle"
      >
        <icons.Shuffle width={22} height={22} />
      </Styled.ShuffleButton>
    </Styled.Controls>
  );
}

export default Controls;
