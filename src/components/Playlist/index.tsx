import MusicCard from '../common/MusicCard';
import { images } from '../../constants';
import * as Styled from '../../styles/mainBody';
import { IMusic } from '../../@types/music';
import { MESSAGE } from '../../constants/messages';

interface Props {
  djPlaylist: IMusic[];
  handleSelectMusic: (music: IMusic) => void;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

function Playlist({
  djPlaylist,
  handleSelectMusic,
  handleDragStart,
  handleDragOver,
  handleDrop,
}: Props) {
  return (
    <>
      {djPlaylist.length > 0 ? (
        <Styled.DjplayContainer>
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
        </Styled.DjplayContainer>
      ) : (
        <Styled.EmptyContainer>
          <images.Cat2 width={350} height={350} />
          <Styled.EmptyTitle>{MESSAGE.EMPTY_PLAYLIST}</Styled.EmptyTitle>
        </Styled.EmptyContainer>
      )}
    </>
  );
}

export default Playlist;
