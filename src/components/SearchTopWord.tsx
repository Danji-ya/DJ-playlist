import React from 'react';
import { ITopSearched } from '../@types/search';
import {
  AlbumImg,
  AlbumImgWrapper,
  AlbumTitle,
  AlbumWrapper,
  MusicListContainer,
  NextBtn,
  PrevBtn,
  SliderContainer,
  Title,
} from '../styles/search';

interface Props {
  data: ITopSearched[];
  handleSlider: (e: React.MouseEvent<HTMLButtonElement>) => void;
  position: number;
  handleSearchKeyword: (keyword: string, isAutoKeyword?: boolean) => void;
}

function SearchTopWord({
  data,
  handleSlider,
  position,
  handleSearchKeyword,
}: Props) {
  return (
    <SliderContainer>
      <Title>인기 검색어</Title>
      <PrevBtn
        type="button"
        name="prev"
        onClick={(e) => handleSlider(e)}
        aria-label="slider prev button"
      >
        &#10094;
      </PrevBtn>
      <NextBtn
        type="button"
        name="next"
        onClick={(e) => handleSlider(e)}
        aria-label="slider next button"
      >
        &#10095;
      </NextBtn>
      <MusicListContainer position={position}>
        {data.map((item: ITopSearched) => {
          return (
            <AlbumWrapper
              key={`${item.id}`}
              onClick={() => handleSearchKeyword(item.title, true)}
              aria-label="music play button"
            >
              <AlbumImgWrapper>
                <AlbumImg src={item.src} alt="" />
              </AlbumImgWrapper>
              <AlbumTitle>{item.title}</AlbumTitle>
            </AlbumWrapper>
          );
        })}
      </MusicListContainer>
    </SliderContainer>
  );
}

export default SearchTopWord;
