import { IMusic } from '../@types/music';
import SearchResult from '../components/SearchResult';
import { useAppDispatch, useAppSelector } from '../store';
import { setSelectedMusic } from '../store/modules/music';

function SearchResultContainer() {
  const dispatch = useAppDispatch();
  const musicList = useAppSelector((state) => state.music.musicList);

  const handleSelectMusic = (music: IMusic) => {
    dispatch(setSelectedMusic(music));
  };

  return (
    <SearchResult musicList={musicList} handleSelectMusic={handleSelectMusic} />
  );
}

export default SearchResultContainer;
