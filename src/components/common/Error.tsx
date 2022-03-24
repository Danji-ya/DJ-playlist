import { images } from '../../constants';
import { Background, Button, Container, Title } from '../../styles/error';

interface Props {
  refresh: () => void;
}

export default function Error({ refresh }: Props) {
  return (
    <Background>
      <Container>
        <images.Cat2 width={350} height={350} />
        <Title>에러가 발생했습니다</Title>
        <Button onClick={() => refresh()} aria-label="reload">
          새로고침
        </Button>
      </Container>
    </Background>
  );
}
