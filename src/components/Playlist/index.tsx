import Card from '@components/common/Card';
import { MESSAGE } from '@constants/messages';
import { H3A11Y } from '@styles/common';
import images from '@constants/images';
import { IMusic } from '@typings/music';
import Styled from './Playlist.style';

interface Props {
  djPlaylist: IMusic[];
  onSelectMusic: (music: IMusic) => void;
  onDragStart: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragDrop: (e: React.DragEvent<HTMLLIElement>) => void;
}

function Playlist({
  djPlaylist,
  onSelectMusic,
  onDragStart,
  onDragOver,
  onDragDrop,
}: Props) {
  return (
    <Styled.Container>
      <H3A11Y>플레이리스트</H3A11Y>
      {djPlaylist.length > 0 ? (
        <Styled.Playlist>
          {djPlaylist.map((item: IMusic, idx: number) => (
            <Card
              key={item.videoId}
              draggable
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDragDrop}
              idx={idx}
            >
              <Card.Thumbnail
                item={item}
                onClick={onSelectMusic}
                url={item.url}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.SubTitle>{item.subtitle}</Card.SubTitle>
              </Card.Body>
            </Card>
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
