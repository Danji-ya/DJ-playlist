import icons from '@constants/icons';
import Styled from './Search.style';

function NoResult() {
  return (
    <Styled.SearchNoResultWrapper>
      <Styled.CatFaceIcon src={icons.catFace} alt="catFace" />
      <Styled.SearchNoResultText>
        앗! 찾으시는 결과가 없네요.
      </Styled.SearchNoResultText>
    </Styled.SearchNoResultWrapper>
  );
}

export default NoResult;
