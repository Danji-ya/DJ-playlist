import React from 'react';
import { SearchResultContainer, SearchResultGrid, SearchResultTitle } from '../styles/searchStyle';
import MusicCard from './common/MusicCard';
import SearchResultEmpty from './SearchResultEmpty';

function SearchResult({ musicList, handleSelectMusic }) {
  return (
    <SearchResultContainer>
      <SearchResultTitle>검색 결과</SearchResultTitle>
      <SearchResultGrid>
        {musicList && (
          <>
            {musicList.length > 0 ? (
              <>
                {musicList.map(item => (
                  <MusicCard item={item} handleSelectMusic={handleSelectMusic} key={item.videoId} />
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
