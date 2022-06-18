import MusicCard from '../common/MusicCard';
import { images } from '../../constants';
import Styled from './Playlist.style';
import { IMusic } from '../../@types/music';
import { MESSAGE } from '../../constants/messages';

interface Props {
  djPlaylist: IMusic[];
  handleSelectMusic: (music: IMusic) => void;
  handleDragStart: (e: React.DragEvent<HTMLLIElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLLIElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLLIElement>) => void;
}

function Playlist({
  djPlaylist,
  handleSelectMusic,
  handleDragStart,
  handleDragOver,
  handleDrop,
}: Props) {
  return (
    <Styled.Container>
      {djPlaylist.length > 0 ? (
        <Styled.Playlist>
          {djPlaylist.map((item: IMusic, idx: number) => (
            <MusicCard
              key={item.videoId}
              item={item}
              draggAble
              handleSelectMusic={handleSelectMusic}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              idx={idx}
            />
          ))}
        </Styled.Playlist>
      ) : (
        <Styled.EmptyWrapper>
          <images.Cat2 width={350} height={350} />
          <Styled.EmptyTitle>{MESSAGE.EMPTY_PLAYLIST}</Styled.EmptyTitle>
        </Styled.EmptyWrapper>
      )}
    </Styled.Container>
  );
}

export default Playlist;
