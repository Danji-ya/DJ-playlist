import { useNavigate } from 'react-router-dom';
import { icons } from '../constants';
import { PATH } from '../constants/path';
import useResize from '../services/hooks/useResize';
import { Background, Container, Home, Title } from '../styles/notFound';

const MAX_WIDTH = 768;

function NotFoundPage() {
  const [width] = useResize({ type: 'throttle' });
  const navigate = useNavigate();

  const handleClick = () => navigate(`${PATH.MAIN}`, { replace: true });

  return (
    <Background>
      <Container>
        <icons.Error width={width > MAX_WIDTH ? MAX_WIDTH / 2 : width / 2} />
        <Title>잘못된 경로입니다</Title>
        <Home onClick={() => handleClick()} aria-label="home">
          홈으로
        </Home>
      </Container>
    </Background>
  );
}

export default NotFoundPage;
