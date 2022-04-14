import { icons } from '../../constants';
import Styled from './Search.style';

function ResultEmpty() {
  return (
    <Styled.SearchResultEmptyWrapper>
      <Styled.CatFaceIcon src={icons.catFace} alt="catFace" />
      <Styled.SearchResultEmptyText>
        앗! 찾으시는 결과가 없네요.
      </Styled.SearchResultEmptyText>
    </Styled.SearchResultEmptyWrapper>
  );
}

export default ResultEmpty;
