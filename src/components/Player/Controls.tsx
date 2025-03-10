import icons from '@constants/icons';
import { IMusic, IMusicChange } from '@typings/music';
import Styled from './Player.style';

interface Props {
  paused: boolean;
  selectedMusic: IMusic;
  shuffle: boolean;
  handleState: () => void;
  handleChangeMusic: ({ music, isNext }: IMusicChange) => void;
  handleShuffle: () => void;
}

function Controls({
  paused,
  selectedMusic,
  shuffle,
  handleChangeMusic,
  handleState,
  handleShuffle,
}: Props) {
  return (
    <Styled.Controls>
      <Styled.PrevButton
        onClick={() => handleChangeMusic({ music: selectedMusic })}
        aria-label="music play prev"
      >
        <icons.Prev size={30} />
      </Styled.PrevButton>

      <Styled.MainButton onClick={handleState} aria-label="music play state">
        {paused ? (
          <icons.Play width={35} height={35} />
        ) : (
          <icons.Pause width={35} height={35} />
        )}
      </Styled.MainButton>

      <Styled.NextButton
        onClick={() =>
          handleChangeMusic({ music: selectedMusic, isNext: true })
        }
        aria-label="music play next"
      >
        <icons.Next />
      </Styled.NextButton>
      <Styled.ShuffleButton
        shuffle={shuffle}
        onClick={() => handleShuffle()}
        aria-label="shuffle"
      >
        <icons.Shuffle width={22} height={22} />
      </Styled.ShuffleButton>
    </Styled.Controls>
  );
}

export default Controls;
