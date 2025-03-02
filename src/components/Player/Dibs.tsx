import icons from '@constants/icons';
import Styled from './Player.style';
import { IMusic } from '../../@types/music';

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
