import icons from '@constants/icons';
import usePlaylist from '@services/hooks/usePlaylist';
import { usePlayer } from '@contexts/PlayerContext';
import Styled from './Player.style';

function Dibs() {
  const { playerState } = usePlayer();
  const { onToggleDibs, isIncludeDjPlaylist } = usePlaylist();
  const { selectedMusic } = playerState;

  const dibs = isIncludeDjPlaylist(selectedMusic);

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
