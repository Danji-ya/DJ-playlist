import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResult from '../components/SearchResult';
import { setSelectedMusic } from '../store/modules/music';
import { restructuring } from '../util/utils';

function SearchResultContainer() {
  const dispatch = useDispatch();
  const musicList = useSelector(state => state.music.musicList);

  const data = useMemo(() => {
    return musicList && musicList.map(item => restructuring(item));
  }, [musicList]);

  const handleSelectMusic = music => {
    dispatch(setSelectedMusic(music));
  };

  return <SearchResult musicList={data} handleSelectMusic={handleSelectMusic} />;
}

export default SearchResultContainer;
