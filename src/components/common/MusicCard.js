import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import {
  MusicCardContainer,
  MusicCardPlayButtonWrapper,
  MusicCardPlaySubtitle,
  MusicCardPlayTitle,
  MusicCardProfileImg,
} from '../../styles/musicCardStyle';

function MusicCard({
  item,
  draggAble,
  idx,
  handleSelectMusic,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) {
  return (
    <MusicCardContainer
      draggable={draggAble ? 'true' : 'false'}
      onDragStart={e => handleDragStart(e)}
      onDragOver={e => handleDragOver(e)}
      onDrop={e => handleDrop(e)}
      data-idx={idx}
    >
      <MusicCardProfileImg onClick={() => handleSelectMusic(item)}>
        <img src={item.url} alt="thumbnail" />
        <MusicCardPlayButtonWrapper>
          <BsPlayCircle size={45} />
        </MusicCardPlayButtonWrapper>
      </MusicCardProfileImg>

      <MusicCardPlayTitle>{item.title}</MusicCardPlayTitle>
      <MusicCardPlaySubtitle>{item.subtitle}</MusicCardPlaySubtitle>
    </MusicCardContainer>
  );
}

export default MusicCard;
