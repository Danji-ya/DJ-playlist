import { IMusic } from '../../@types/music';
import { icons } from '../../constants';
import Styled from './Player.style';

interface Props {
  dibs: boolean;
  selectedMusic: IMusic;
  handleDjPlaylist: (music: IMusic) => void;
}

function Dibs({ dibs, selectedMusic, handleDjPlaylist }: Props) {
  return (
    <Styled.AddButton
      dibs={dibs}
      onClick={() => handleDjPlaylist(selectedMusic)}
      aria-label="dibs"
    >
      <icons.Heart />
    </Styled.AddButton>
  );
}

export default Dibs;
