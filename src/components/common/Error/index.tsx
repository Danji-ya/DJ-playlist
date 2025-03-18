import images from '@constants/images';
import Styled from './Error.style';

interface Props {
  refresh?: () => void;
}

function Error({ refresh }: Props) {
  function handleClick() {
    if (refresh) refresh();
  }

  return (
    <Styled.Background>
      <Styled.Container>
        <images.Cat2 width={350} height={350} />
        <Styled.Title>에러가 발생했습니다</Styled.Title>
        <Styled.Button onClick={() => handleClick()} aria-label="reload">
          새로고침
        </Styled.Button>
      </Styled.Container>
    </Styled.Background>
  );
}

export default Error;
