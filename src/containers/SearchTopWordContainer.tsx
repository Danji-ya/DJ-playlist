import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ITopSearched } from '../@types/search';
import SearchTopWord from '../components/SearchTopWord';
import { SLIDER } from '../constants/slider';
import { useGetPlaylist } from '../services/queries/player';
import { useAppDispatch, useAppSelector } from '../store';
import { getMusicListSuccess, setKeyword } from '../store/modules/music';

type BtnType = 'next' | 'prev';

function SearchTopWordContainer() {
  const keyword = useAppSelector((state) => state.music.keyword);
  const [position, setPosition] = useState(0);
  const [topSearched, setTopSearched] = useState<ITopSearched[]>(
    SLIDER.INIT_DATA,
  );
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { refetch } = useGetPlaylist({
    query: keyword,
    onSuccess: (data) => {
      // TODO: 바꿔야 할 부분
      console.log(data);
      dispatch(getMusicListSuccess(data));
    },
    onError: () => {
      // TODO: 에러핸들링
      console.log('실패시');
    },
  });

  const imgTotalWidth = topSearched.length * SLIDER.ITEM_WIDTH;

  const isMinMaxSlider = (pos: number) => pos >= imgTotalWidth || pos < 0;

  const moveSlider = (type: BtnType) => {
    const handleType = { prev: -SLIDER.ITEM_WIDTH, next: SLIDER.ITEM_WIDTH };
    let nextPosition = position + handleType[type];

    if (isMinMaxSlider(nextPosition))
      nextPosition = type === 'prev' ? 0 : nextPosition - SLIDER.ITEM_WIDTH;

    setPosition(nextPosition);
  };

  const handleSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    if (name.includes('prev') || name.includes('next')) {
      moveSlider(name as BtnType);
    }
  };

  const handleSearchKeyword = (query: string) => {
    dispatch(setKeyword(query));
    history.replace(`/search?query=${query}`);
  };

  return (
    <SearchTopWord
      data={topSearched}
      position={position}
      handleSlider={handleSlider}
      handleSearchKeyword={handleSearchKeyword}
    />
  );
}

export default SearchTopWordContainer;
