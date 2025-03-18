import icons from '@constants/icons';
import { IMusic } from '@typings/music';
import Styled from './Player.style';

interface Props {
  dibs: boolean;
  selectedMusic: IMusic;
  onToggleDibs: (music: IMusic) => void;
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
