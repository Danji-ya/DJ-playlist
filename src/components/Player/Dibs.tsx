import icons from '@constants/icons';
import { Music } from '@typings/music';
import Styled from './Player.style';

interface Props {
  dibs: boolean;
  selectedMusic: Music;
  onToggleDibs: (music: Music) => void;
}

function Dibs({ dibs, selectedMusic, onToggleDibs }: Props) {
  return (
    <Styled.AddButton
      dibs={dibs}
      onClick={() => onToggleDibs(selectedMusic)}
      aria-label="dibs"
    >
      <icons.Heart />
    </Styled.AddButton>
  );
}

export default Dibs;
