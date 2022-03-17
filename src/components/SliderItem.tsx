import { ITopSearched } from '../@types/search';
import {
  AlbumDiv,
  AlbumImg,
  AlbumImgWrapper,
  AlbumTitle,
  AlbumWrapper,
} from '../styles/search';

interface Props {
  item: ITopSearched;
  handleSearchKeyword: (keyword: string, isAutoKeyword?: boolean) => void;
}

function SliderItem({ item, handleSearchKeyword }: Props) {
  return (
    <AlbumWrapper key={`${item.id}`}>
      <AlbumDiv
        onClick={() => handleSearchKeyword(item.title, true)}
        aria-label="music play button"
      >
        <AlbumImgWrapper>
          <AlbumImg src={item.src} alt="Album Image" />
        </AlbumImgWrapper>
        <AlbumTitle>{item.title}</AlbumTitle>
      </AlbumDiv>
    </AlbumWrapper>
  );
}

export default SliderItem;
