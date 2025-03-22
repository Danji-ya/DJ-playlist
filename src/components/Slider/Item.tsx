import { useSearchForm } from '@contexts/SearchFormContext';
import { TopSearchItem } from '@typings/search';
import Styled from './Slider.style';

interface Props {
  item: TopSearchItem;
  isShow: boolean;
}

function Item({ item, isShow }: Props) {
  const {
    searchControls: { onSearchKeywordChange },
  } = useSearchForm();

  return (
    <Styled.AlbumWrapper key={`${item.id}`}>
      <Styled.AlbumBtn
        tabIndex={isShow ? undefined : -1}
        aria-hidden={!isShow}
        onClick={() => onSearchKeywordChange(item.title)}
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
