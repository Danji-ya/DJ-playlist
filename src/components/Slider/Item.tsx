import { ISearchKeyword, ITopSearched } from '../../@types/search';
import Styled from './Slider.style';

interface Props {
  item: ITopSearched;
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
}

function Item({ item, handleSearchKeyword }: Props) {
  return (
    <Styled.AlbumWrapper key={`${item.id}`}>
      <Styled.AlbumBtn
        onClick={() =>
          handleSearchKeyword({ value: item.title, isAutoKeyword: true })
        }
      >
        <Styled.AlbumImgWrapper>
          <Styled.AlbumImg src={item.src} alt="Album Image" />
        </Styled.AlbumImgWrapper>
        <Styled.AlbumTitle>{item.title}</Styled.AlbumTitle>
      </Styled.AlbumBtn>
    </Styled.AlbumWrapper>
  );
}

export default Item;
