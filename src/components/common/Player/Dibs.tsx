import { IMusic } from '../../../@types/music';
import { icons } from '../../../constants';
import * as Styled from '../../../styles/player';

interface Props {
  dibs: boolean;
  selectedMusic: IMusic;
  handleDjplaylist: (music: IMusic) => void;
}

function Dibs({ dibs, selectedMusic, handleDjplaylist }: Props) {
  return (
    <Styled.AddButton
      dibs={dibs}
      onClick={() => handleDjplaylist(selectedMusic)}
      aria-label="dibs button"
    >
      <icons.Heart />
    </Styled.AddButton>
  );
}

export default Dibs;
