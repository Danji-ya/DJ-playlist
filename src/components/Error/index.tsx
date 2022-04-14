import { images } from '../../constants';
import * as Styled from '../../styles/error';

interface Props {
  refresh: () => void;
}

export default function Error({ refresh }: Props) {
  return (
    <Styled.Background>
      <Styled.Container>
        <images.Cat2 width={350} height={350} />
        <Styled.Title>에러가 발생했습니다</Styled.Title>
        <Styled.Button onClick={() => refresh()} aria-label="reload">
          새로고침
        </Styled.Button>
      </Styled.Container>
    </Styled.Background>
  );
}
