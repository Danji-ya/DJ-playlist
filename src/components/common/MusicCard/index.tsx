import React from 'react';
import { IMusic } from '../../../@types/music';
import { icons } from '../../../constants';
import Styled from './MusicCard.style';
import LazyImage from '../LazyImage';

interface Props {
  item: IMusic;
  handleSelectMusic: (music: IMusic) => void;
  draggAble?: boolean;
  idx?: number;
  handleDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
  handleDragOver?: (e: React.DragEvent<HTMLLIElement>) => void;
  handleDrop?: (e: React.DragEvent<HTMLLIElement>) => void;
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
  const handleProfileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    handleSelectMusic(item);
  };

  return (
    <Styled.Container
      draggable={draggAble ? 'true' : 'false'}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-idx={idx}
    >
      <Styled.Contents>
        <Styled.Profile onClick={handleProfileClick} aria-label="music play">
          <LazyImage src={item.url} alt="thumbnail" />
          <Styled.PlayBtnWrapper>
            <icons.PlayBtn width="45px" height="45px" />
          </Styled.PlayBtnWrapper>
        </Styled.Profile>

        <Styled.Title>{item.title}</Styled.Title>
        <Styled.Subtitle>{item.subtitle}</Styled.Subtitle>
      </Styled.Contents>
    </Styled.Container>
  );
}

export default MusicCard;
