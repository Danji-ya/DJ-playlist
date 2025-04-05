import { useSearchForm } from '@contexts/SearchFormContext';
import { Styled } from './Carousel.style';

interface SearchItemProps {
  id: string;
  image: string;
  title: string;
  genre: string;
}

function Item({ id, genre, image, title }: SearchItemProps) {
  const {
    searchControls: { onSearchKeywordChange },
  } = useSearchForm();

  return (
    <Styled.SearchItem key={id} onClick={() => onSearchKeywordChange(title)}>
      <Styled.ImageContainer>
        <Styled.SearchItemImage src={image} alt={title} />
        <Styled.ImageOverlay />
      </Styled.ImageContainer>
      <Styled.SearchItemText>
        <Styled.SearchItemKeyword>{title}</Styled.SearchItemKeyword>
        <Styled.SearchItemGenre>Music • {genre}</Styled.SearchItemGenre>
      </Styled.SearchItemText>
    </Styled.SearchItem>
  );
}

export default Item;
