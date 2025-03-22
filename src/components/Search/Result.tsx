import Card, { CardSkeleton } from '@components/common/Card';
import { Music } from '@typings/music';
import NoResult from './NoResult';
import Styled from './Search.style';

interface BaseProps {
  onSelectMusic: (music: Music) => void;
}

interface Props extends BaseProps {
  musicList: undefined | Music[];
  isLoading: boolean;
}

function LoadingSkeleton() {
  return (
    <>
      {Array.from({ length: 8 }, (_v, i) => i + 1).map((item) => (
        <CardSkeleton key={item} />
      ))}
    </>
  );
}

function MusicCards({
  musicList,
  onSelectMusic,
}: BaseProps & { musicList: Music[] }) {
  return (
    <>
      {musicList.map((item: Music) => (
        <Card key={item.videoId}>
          <Card.Thumbnail item={item} onClick={onSelectMusic} url={item.url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.SubTitle>{item.subtitle}</Card.SubTitle>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

function SearchResult({ musicList, onSelectMusic }: Omit<Props, 'isLoading'>) {
  if (musicList === undefined) return null;
  if (musicList.length === 0) return <NoResult />;

  return <MusicCards musicList={musicList} onSelectMusic={onSelectMusic} />;
}

function Result({ musicList, onSelectMusic, isLoading }: Props) {
  return (
    <Styled.SearchResultGrid>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <SearchResult musicList={musicList} onSelectMusic={onSelectMusic} />
      )}
    </Styled.SearchResultGrid>
  );
}

export default Result;
