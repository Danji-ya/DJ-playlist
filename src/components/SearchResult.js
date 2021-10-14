import React from 'react';
import { SearchResultContainer, SearchResultGrid, SearchResultTitle } from '../styles/searchStyle';
import MusicCard from './common/MusicCard';

function SearchResult({ musicList, handleSelectMusic }) {
  return (
    <SearchResultContainer>
      <SearchResultTitle>검색 결과</SearchResultTitle>
      <SearchResultGrid>
        {musicList &&
          musicList.map(item => (
            <MusicCard item={item} handleSelectMusic={handleSelectMusic} key={item.videoId} />
          ))}
      </SearchResultGrid>
    </SearchResultContainer>
  );
}

export default SearchResult;
