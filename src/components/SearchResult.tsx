import { IMusic } from '../@types/music';
import * as Styled from '../styles/search';
import MusicCard from './common/MusicCard';
import SearchResultEmpty from './SearchResultEmpty';
import Skeleton from './Skeleton';

interface Props {
  musicList: undefined | IMusic[];
  handleSelectMusic: (music: IMusic) => void;
  isLoading: boolean;
}

function SearchResult({ musicList, handleSelectMusic, isLoading }: Props) {
  return (
    <Styled.SearchResultContainer>
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
                  <MusicCard
                    item={item}
                    handleSelectMusic={handleSelectMusic}
                    key={item.videoId}
                  />
                ))}
              </>
            ) : (
              musicList && <SearchResultEmpty />
            )}
          </>
        )}
      </Styled.SearchResultGrid>
    </Styled.SearchResultContainer>
  );
}

export default SearchResult;
