import Play from '../../assets/icons/play.svg';
import {
  MusicCardContainer,
  MusicCardPlayButtonWrapper,
  MusicCardPlaySubtitle,
  MusicCardPlayTitle,
  MusicCardProfileImg,
} from '../../styles/musicCard';

function MusicCard({
  item,
  draggAble,
  idx,
  handleSelectMusic,
  handleDragStart,
  handleDragOver,
  handleDrop,
}: any) {
  return (
    <MusicCardContainer
      draggable={draggAble ? 'true' : 'false'}
      onDragStart={(e) => handleDragStart(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
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
