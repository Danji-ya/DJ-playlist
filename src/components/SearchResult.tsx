import { IMusic } from '../@types/music';
import {
  SearchResultContainer,
  SearchResultGrid,
  SearchResultTitle,
} from '../styles/search';
import MusicCard from './common/MusicCard';
import SearchResultEmpty from './SearchResultEmpty';

function SearchResult({ musicList, handleSelectMusic }: any) {
  return (
    <SearchResultContainer>
      <SearchResultTitle>검색 결과</SearchResultTitle>
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
