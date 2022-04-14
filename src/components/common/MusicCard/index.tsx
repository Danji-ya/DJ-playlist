import { IMusic } from '../../../@types/music';
import { icons } from '../../../constants';
import * as Styled from '../../../styles/musicCard';
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
      <Styled.ProfileImg
        onClick={() => handleSelectMusic(item)}
        aria-label="music play button"
      >
        <LazyImage src={item.url} alt="thumbnail" />
        <Styled.PlayButtonWrapper>
          <icons.PlayBtn width="45px" height="45px" />
        </Styled.PlayButtonWrapper>
      </Styled.ProfileImg>

      <Styled.PlayTitle>{item.title}</Styled.PlayTitle>
      <Styled.PlaySubtitle>{item.subtitle}</Styled.PlaySubtitle>
    </Styled.Container>
  );
}

export default MusicCard;
