import images from '@constants/images';
import Styled from './Error.style';

interface Props {
  refresh?: () => void;
}

function Error({ refresh }: Props) {
  function handleClick() {
    if (refresh) refresh();
  }

  return (
    <Styled.Background>
      <Styled.Container>
        <images.Cat2 width={350} height={350} />
        <Styled.Title>An error occurred</Styled.Title>
        <Styled.Button onClick={() => handleClick()} aria-label="reload">
          Refresh
        </Styled.Button>
      </Styled.Container>
    </Styled.Background>
  );
}

export default Error;
