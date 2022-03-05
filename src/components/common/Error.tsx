import { useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import { Background, Button, Container, Img, Title } from '../../styles/error';

export default function Error() {
  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <Img src={images.cat} />
        <Title>에러가 발생했습니다</Title>
        <Button onClick={() => navigate('/', { replace: true })}>홈으로</Button>
      </Container>
    </Background>
  );
}
