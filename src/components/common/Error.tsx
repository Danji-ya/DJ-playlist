import { images } from '../../constants';
import {
  Background,
  GotoButton,
  NoResultsImg,
  NoResultsTitle,
  NoResultsWrapper,
} from '../../styles/error';

export default function Error({ history }: any) {
  const handleClick = () => history.go(0);

  return (
    <Background>
      <NoResultsWrapper>
        <NoResultsImg src={images.cat} />
        <NoResultsTitle>에러가 발생했습니다</NoResultsTitle>
        <GotoButton onClick={handleClick}>돌아가기</GotoButton>
      </NoResultsWrapper>
    </Background>
  );
}
