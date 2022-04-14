import { IMusic } from '../../../@types/music';
import { icons } from '../../../constants';
import Styled from './MusicCard.style';
import LazyImage from '../LazyImage';

interface Props {
  item: IMusic;
  handleSelectMusic: (music: IMusic) => void;
  draggAble?: boolean;
  idx?: number;
  handleDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
}

function MusicCard({
  item,
  handleSelectMusic,
  draggAble,
  idx,
  handleDragStart,
  handleDragOver,
  handleDrop,
}: Props) {
  return (
    <Styled.Container
      draggable={draggAble ? 'true' : 'false'}
      onDragStart={(e) => handleDragStart && handleDragStart(e)}
      onDragOver={(e) => handleDragOver && handleDragOver(e)}
      onDrop={(e) => handleDrop && handleDrop(e)}
      data-idx={idx}
    >
      <Styled.Profile
        onClick={() => handleSelectMusic(item)}
        aria-label="music play button"
      >
        <LazyImage src={item.url} alt="thumbnail" />
        <Styled.Button>
          <icons.PlayBtn width="45px" height="45px" />
        </Styled.Button>
      </Styled.Profile>

      <Styled.Title>{item.title}</Styled.Title>
      <Styled.Subtitle>{item.subtitle}</Styled.Subtitle>
    </Styled.Container>
  );
}

export default MusicCard;
