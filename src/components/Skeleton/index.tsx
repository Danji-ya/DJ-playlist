import Styled from './Skeleton.style';

function Skeleton() {
  return (
    <Styled.Card>
      <Styled.Thumnail />
      <Styled.Title />
      <Styled.SubTitle />
    </Styled.Card>
  );
}

export default Skeleton;
