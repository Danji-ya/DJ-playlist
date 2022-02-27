import React, { useEffect, useState } from 'react';
import { ITopSearched } from '../@types/search';
import { axiosDefaultInstance } from '../api';
import SearchTopWord from '../components/SearchTopWord';
import { useAppDispatch } from '../store';
import { getMusicList } from '../store/modules/music';

type BtnType = 'next' | 'prev';

function SearchTopWordContainer() {
  const [position, setPosition] = useState(0);
  const [topSearched, setTopSearched] = useState<ITopSearched[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosDefaultInstance.get('dummy/data.json');
        setTopSearched([...response.data.topSearched]);
      } catch (error) {
        // console.error(error);
      }
    }
    getData();

    return () => {};
  }, []);

  const imgTotalWidth = topSearched.length * 265;

  const moveSlider = (type: BtnType) => {
    const handleType = { prev: -280, next: 280 };
    let curPosition = position + handleType[type];

    const isMinMaxSlider = (pos: number) => pos >= imgTotalWidth || pos < 0;

    if (isMinMaxSlider(curPosition))
      curPosition = type === 'prev' ? 0 : curPosition - 280;

    setPosition(curPosition);
  };

  const handleSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    if (name.includes('prev') || name.includes('next')) {
      moveSlider(name as BtnType);
    }
  };

  const handleSearchKeyword = (keyword: string) => {
    dispatch(getMusicList(keyword));
  };

  return (
    <SearchTopWord
      imgTotalWidth={imgTotalWidth}
      position={position}
      data={topSearched}
      handleSlider={handleSlider}
      handleSearchKeyword={handleSearchKeyword}
    />
  );
}

export default SearchTopWordContainer;
