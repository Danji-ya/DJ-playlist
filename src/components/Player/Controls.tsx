import icons from '@constants/icons';
import { IMusic, IMusicChange } from '@typings/music';
import Styled from './Player.style';

interface Props {
  paused: boolean;
  selectedMusic: IMusic;
  shuffle: boolean;
  onToggleState: () => void;
  onMusicChange: ({ music, isNext }: IMusicChange) => void;
  onToggleShuffle: () => void;
}

function Controls({
  paused,
  selectedMusic,
  shuffle,
  onMusicChange,
  onToggleState,
  onToggleShuffle,
}: Props) {
  return (
    <Styled.Controls>
      <Styled.PrevButton
        onClick={() => onMusicChange({ music: selectedMusic })}
        aria-label="music play prev"
      >
        <icons.Prev size={30} />
      </Styled.PrevButton>

      <Styled.MainButton onClick={onToggleState} aria-label="music play state">
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
