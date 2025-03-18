import { ISearchKeyword, ITopSearched } from '@typings/search';
import Styled from './Slider.style';

interface Props {
  item: ITopSearched;
  isShow: boolean;
  onSearchKeywordChange: ({ value, isAutoKeyword }: ISearchKeyword) => void;
}

function Item({ item, isShow, onSearchKeywordChange }: Props) {
  return (
    <Styled.AlbumWrapper key={`${item.id}`}>
      <Styled.AlbumBtn
        tabIndex={isShow ? undefined : -1}
        aria-hidden={!isShow}
        onClick={() =>
          onSearchKeywordChange({ value: item.title, isAutoKeyword: true })
        }
      >
        <Styled.AlbumImgWrapper>
          <Styled.AlbumImg src={item.src} alt={`${item.title} 이미지`} />
        </Styled.AlbumImgWrapper>
        <Styled.AlbumTitle>{item.title}</Styled.AlbumTitle>
      </Styled.AlbumBtn>
    </Styled.AlbumWrapper>
  );
}

export default Item;
