import Close from '../../../assets/icons/close.svg';
import {
  Body,
  Contents,
  Message,
  Progress,
  Title,
  ToastWrapper,
} from '../../../styles/toast';

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

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    hideToast(id);
  };

  return (
    <ToastWrapper type={type} duration={duration} role="alert">
      <Body>
        <Contents>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Contents>
        <Close onClick={handleClick} />
      </Body>
      <Progress duration={duration} onAnimationEnd={handleAnimationEnd} />
    </ToastWrapper>
  );
}

export default Toast;