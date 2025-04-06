import icons from '@constants/icons';
import Styled from './Search.style';

function NoResult() {
  return (
    <Styled.SearchNoResultWrapper>
      <Styled.CatFaceIcon src={icons.catFace} alt="catFace" />
      <Styled.SearchNoResultText>
        Oops! No results found.
      </Styled.SearchNoResultText>
    </Styled.SearchNoResultWrapper>
  );
}

export default NoResult;
