import { useNavigate } from 'react-router-dom';
import icons from '@constants/icons';
import { PATH } from '@constants/path';
import useResize from '@services/hooks/useResize';
import Styled from './NotFoundPage.style';

const MAX_WIDTH = 768;

function NotFoundPage() {
  const [width] = useResize({ type: 'throttle' });
  const navigate = useNavigate();

  const handleClick = () => navigate(`${PATH.MAIN}`, { replace: true });

  return (
    <Styled.Background>
      <Styled.Container>
        <icons.Error width={width > MAX_WIDTH ? MAX_WIDTH / 2 : width / 2} />
        <Styled.Title>Invalid Path</Styled.Title>
        <Styled.Home onClick={() => handleClick()} aria-label="home">
          Go to Home
        </Styled.Home>
      </Styled.Container>
    </Styled.Background>
  );
}

export default NotFoundPage;
