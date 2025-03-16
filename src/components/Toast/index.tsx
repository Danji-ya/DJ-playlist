import icons from '@constants/icons';
import { IToastState } from '@typings/toast';
import Styled from './Toast.style';

interface Props extends IToastState {
  onHideToast: (id: string) => void;
}

function Toast({
  id,
  title,
  message,
  duration = 5000,
  type = 'success',
  onHideToast,
}: Props) {
  const handleAnimationEnd = () => {
    onHideToast(id);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onHideToast(id);
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
