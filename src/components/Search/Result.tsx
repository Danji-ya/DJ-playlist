import { useSearchForm } from '@contexts/SearchFormContext';
import usePlaylist from '@services/hooks/usePlaylist';
import useSearchResult from '@services/hooks/useSearchResult';
import Card from '@components/common/Card';
import { Music } from '@typings/music';
import NoResult from './NoResult';
import Styled from './Search.style';

function MusicCards({ musicList }: { musicList: Music[] }) {
  const {
    playlistControls: { onSelectMusic },
  } = usePlaylist();

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

function Result() {
  const { keyword } = useSearchForm();
  const { musicList } = useSearchResult({ keyword });

  if (musicList === undefined) return null;
  if (musicList.length === 0) return <NoResult />;

  return (
    <Styled.SearchResultGrid>
      <MusicCards musicList={musicList} />
    </Styled.SearchResultGrid>
  );
}

export default Result;
