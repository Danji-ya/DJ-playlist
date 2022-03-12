import { images } from '../../constants';
import { Background, Button, Container, Img, Title } from '../../styles/error';

interface Props {
  refresh: () => void;
}

export default function Error({ refresh }: Props) {
  return (
    <Background>
      <Container>
        <Img src={images.cat} alt="cat" />
        <Title>에러가 발생했습니다</Title>
        <Button onClick={() => refresh()} aria-label="reload">
          새로고침
        </Button>
      </Container>
    </Background>
  );
}
