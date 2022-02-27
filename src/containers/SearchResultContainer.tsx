import { useMemo } from 'react';
import { IMusic } from '../@types/music';
import SearchResult from '../components/SearchResult';
import { useAppDispatch, useAppSelector } from '../store';
import { setSelectedMusic } from '../store/modules/music';
import { restructuring } from '../utils/common';

function SearchResultContainer() {
  const dispatch = useAppDispatch();
  const musicList = useAppSelector((state) => state.music.musicList);

  const data = useMemo(() => {
    return musicList && musicList.map((item: any) => restructuring(item));
  }, [musicList]);

  const handleSelectMusic = (music: IMusic) => {
    dispatch(setSelectedMusic(music));
  };

  return (
    <SearchResult musicList={data} handleSelectMusic={handleSelectMusic} />
  );
}

export default SearchResultContainer;
