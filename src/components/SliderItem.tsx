import { ISearchKeyword, ITopSearched } from '../@types/search';
import {
  AlbumDiv,
  AlbumImg,
  AlbumImgWrapper,
  AlbumTitle,
  AlbumWrapper,
} from '../styles/search';

interface Props {
  item: ITopSearched;
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
}

function SliderItem({ item, handleSearchKeyword }: Props) {
  return (
    <AlbumWrapper key={`${item.id}`}>
      <AlbumDiv
        onClick={() =>
          handleSearchKeyword({ value: item.title, isAutoKeyword: true })
        }
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
