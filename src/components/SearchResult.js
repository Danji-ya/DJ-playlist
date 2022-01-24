import React from 'react';
import { SearchResultContainer, SearchResultGrid, SearchResultTitle } from '../styles/searchStyle';
import MusicCard from './common/MusicCard';
import SearchResultEmpty from './SearchResultEmpty';

function SearchResult({ musicList, keyword, handleSelectMusic }) {
  return (
    <SearchResultContainer>
      <SearchResultTitle>검색 결과</SearchResultTitle>
      <SearchResultGrid>
        {musicList.length < 1 && keyword && <SearchResultEmpty />}
        {musicList &&
          musicList.map(item => (
            <MusicCard item={item} handleSelectMusic={handleSelectMusic} key={item.videoId} />
          ))}
      </SearchResultGrid>
    </SearchResultContainer>
  );
}

export default SearchResult;
