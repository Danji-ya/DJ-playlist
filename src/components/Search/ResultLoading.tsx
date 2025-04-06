import { CardSkeleton } from '@components/common/Card';
import Styled from './Search.style';

function ResultLoading() {
  return (
    <Styled.SearchResultGrid>
      {Array.from({ length: 8 }, (_v, i) => i + 1).map((item) => (
        <CardSkeleton key={item} />
      ))}
    </Styled.SearchResultGrid>
  );
}

export default ResultLoading;
