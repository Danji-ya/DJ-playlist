import useDragAndDrop from '@services/hooks/useDragAndDrop';
import Card from '@components/common/Card';
import { MESSAGE } from '@constants/messages';
import { H3A11Y } from '@styles/common';
import images from '@constants/images';
import { Music } from '@typings/music';
import usePlaylist from '@services/hooks/usePlaylist';
import Styled from './Playlist.style';

function Playlist() {
  const { playlist, onSelectMusic, onPlaylistDrop } = usePlaylist();
  const { handlers } = useDragAndDrop(onPlaylistDrop);

  return (
    <Styled.Container>
      <H3A11Y>Playlist</H3A11Y>
      {playlist.length > 0 ? (
        <Styled.Playlist>
          {playlist.map((item: Music, idx: number) => (
            <Card
              key={item.videoId}
              draggable
              onDragStart={handlers.onDragStart}
              onDragOver={handlers.onDragOver}
              onDrop={handlers.onDrop}
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
