import { icons } from '../constants';
import {
  CatFaceIcon,
  SearchResultEmptyWrapper,
  SearchResultEmptyText,
} from '../styles/search';

function SearchResultEmpty() {
  return (
    <SearchResultEmptyWrapper>
      <CatFaceIcon src={icons.catFace} alt="catFace" />
      <SearchResultEmptyText>앗! 찾으시는 결과가 없네요.</SearchResultEmptyText>
    </SearchResultEmptyWrapper>
  );
}

export default SearchResultEmpty;
