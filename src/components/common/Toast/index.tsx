import { icons } from '../../../constants';
import * as Styled from '../../../styles/toast';

interface Props {
  id: string;
  title: string;
  message: string;
  duration?: number;
  type?: 'success' | 'error' | 'info';
  hideToast: (id: string) => void;
}

function Toast({
  id,
  title,
  message,
  duration = 5000,
  type = 'success',
  hideToast,
}: Props) {
  const handleAnimationEnd = () => {
    hideToast(id);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    hideToast(id);
  };

  return (
    <Styled.ToastWrapper type={type} duration={duration} role="alert">
      <Styled.Body>
        <Styled.Contents>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Message>{message}</Styled.Message>
        </Styled.Contents>
        <Styled.CloseBtn onClick={handleClick} aria-label="close">
          <icons.Close />
        </Styled.CloseBtn>
      </Styled.Body>
      <Styled.Progress
        duration={duration}
        onAnimationEnd={handleAnimationEnd}
      />
    </Styled.ToastWrapper>
  );
}

export default Toast;
