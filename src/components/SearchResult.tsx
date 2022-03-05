import { IMusic } from '../@types/music';
import { SearchResultContainer, SearchResultGrid } from '../styles/search';
import MusicCard from './common/MusicCard';
import SearchResultEmpty from './SearchResultEmpty';

interface Props {
  musicList: undefined | IMusic[];
  handleSelectMusic: (music: IMusic) => void;
}

function SearchResult({ musicList, handleSelectMusic }: Props) {
  return (
    <SearchResultContainer>
      <SearchResultGrid>
        {musicList && (
          <>
            {musicList.length > 0 ? (
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
              <SearchResultEmpty />
            )}
          </>
        )}
      </SearchResultGrid>
    </SearchResultContainer>
  );
}

export default SearchResult;
