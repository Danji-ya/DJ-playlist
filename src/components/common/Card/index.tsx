import icons from '@constants/icons';
import LazyImage from '@components/common/LazyImage';
import Styled from './Card.style';
import {
  Props,
  BodyProps,
  SubTitleProps,
  TitleProps,
  TumbnailProps,
} from './Card.types';

function Card({
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
  idx,
  children,
}: Props) {
  return (
    <Styled.Container
      {...(draggable && {
        draggable,
        onDragStart,
        onDragOver,
        onDrop,
        'data-idx': idx,
      })}
    >
      {children}
    </Styled.Container>
  );
}

function CardThumbnail({ item, onClick, rounded, url }: TumbnailProps) {
  const handleProfileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    onClick(item);
  };

  return (
    <Styled.Profile onClick={handleProfileClick} aria-label="music play">
      <LazyImage src={url} rounded={rounded} alt="thumbnail" />
      <Styled.PlayBtnWrapper>
        <icons.PlayBtn width="45px" height="45px" />
      </Styled.PlayBtnWrapper>
    </Styled.Profile>
  );
}

function CardBody({ children }: BodyProps) {
  return <div>{children}</div>;
}

function CardTitle({ children }: TitleProps) {
  return <Styled.Title>{children}</Styled.Title>;
}
function CardSubTitle({ children }: SubTitleProps) {
  return <Styled.Subtitle>{children}</Styled.Subtitle>;
}

Card.Thumbnail = CardThumbnail;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;

export default Card;
export { default as CardSkeleton } from './Card.skeleton';
