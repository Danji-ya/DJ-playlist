import Styled from './Card.style';

function CardSkeleton() {
  return (
    <Styled.ContainerSkeleton>
      <Styled.ThumnailSkeleton />
      <Styled.TitleSkeleton />
      <Styled.SubtitleSkeleton />
    </Styled.ContainerSkeleton>
  );
}

export default CardSkeleton;
