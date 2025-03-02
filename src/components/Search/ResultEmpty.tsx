import icons from '@constants/icons';
import Styled from './Search.style';

function ResultEmpty() {
  return (
    <Styled.SearchResultEmptyWrapper>
      <Styled.CatFaceIcon src={icons.catFace} alt="catFace" />
      <Styled.SearchResultEmptyText>
        Oops, not the result you were looking for.
      </Styled.SearchResultEmptyText>
    </Styled.SearchResultEmptyWrapper>
  );
}

export default ResultEmpty;
