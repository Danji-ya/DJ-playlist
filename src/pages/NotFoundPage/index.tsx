import { useNavigate } from 'react-router-dom';
import { icons } from '../../constants';
import { PATH } from '../../constants/path';
import useResize from '../../services/hooks/useResize';
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
        <Styled.Title>잘못된 경로입니다</Styled.Title>
        <Styled.Home onClick={() => handleClick()} aria-label="home">
          홈으로
        </Styled.Home>
      </Styled.Container>
    </Styled.Background>
  );
}

export default NotFoundPage;
