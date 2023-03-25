import { IMusic } from '../../@types/music';
import Styled from './Search.style';
import ResultEmpty from './ResultEmpty';
import Skeleton from '../Skeleton';
import CardItem from '../common/CardItem';

interface Props {
  musicList: undefined | IMusic[];
  handleSelectMusic: (music: IMusic) => void;
  isLoading: boolean;
}

function Result({ musicList, handleSelectMusic, isLoading }: Props) {
  return (
    <Styled.SearchResultGrid>
      {isLoading ? (
        Array.from({ length: 8 }, (_v, i) => i + 1).map((item) => (
          <Skeleton key={item} />
        ))
      ) : (
        <>
          {musicList && musicList.length > 0 ? (
            <>
              {musicList.map((item: IMusic) => (
                <CardItem key={item.videoId}>
                  <CardItem.Thumbnail
                    item={item}
                    onClick={handleSelectMusic}
                    url={item.url}
                  />
                  <CardItem.Body>
                    <CardItem.Title>{item.title}</CardItem.Title>
                    <CardItem.SubTitle>{item.subtitle}</CardItem.SubTitle>
                  </CardItem.Body>
                </CardItem>
              ))}
            </>
          ) : (
            musicList && <ResultEmpty />
          )}
        </>
      )}
    </Styled.SearchResultGrid>
  );
}

export default Result;
