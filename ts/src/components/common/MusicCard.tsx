import { IMusic } from '../../@types/music';
import Play from '../../assets/icons/play.svg';
import {
  MusicCardContainer,
  MusicCardPlayButtonWrapper,
  MusicCardPlaySubtitle,
  MusicCardPlayTitle,
  MusicCardProfileImg,
} from '../../styles/musicCard';

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
    <MusicCardContainer
      draggable={draggAble ? 'true' : 'false'}
      onDragStart={(e) => handleDragStart && handleDragStart(e)}
      onDragOver={(e) => handleDragOver && handleDragOver(e)}
      onDrop={(e) => handleDrop && handleDrop(e)}
      data-idx={idx}
    >
      <MusicCardProfileImg onClick={() => handleSelectMusic(item)}>
        <img src={item.url} alt="thumbnail" />
        <MusicCardPlayButtonWrapper>
          <Play width="45px" height="45px" />
        </MusicCardPlayButtonWrapper>
      </MusicCardProfileImg>

      <MusicCardPlayTitle>{item.title}</MusicCardPlayTitle>
      <MusicCardPlaySubtitle>{item.subtitle}</MusicCardPlaySubtitle>
    </MusicCardContainer>
  );
}

export default MusicCard;
