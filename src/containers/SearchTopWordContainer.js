import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { axiosDefaultInstance } from '../api';
import SearchTopWord from '../components/SearchTopWord';
import { setKeyword } from '../store/modules/music';

function SearchTopWordContainer() {
  const [position, setPosition] = useState(0);
  const [topSearched, setTopSearched] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosDefaultInstance.get('dummy/data.json');
        setTopSearched([...response.data.topSearched]);
      } catch (error) {
        console.error(error);
      }
    }
    getData();

    return () => {};
  }, []);

  // 최대 값 및 width 지정 다시.
  const imgTotalWidth = topSearched.length * 265;

  const moveSlider = type => {
    const handleType = { prev: -280, next: 280 };
    let curPosition = position + handleType[type];

    const isMinMaxSlider = pos => pos >= imgTotalWidth || pos < 0;

    if (isMinMaxSlider(curPosition)) curPosition = type === 'prev' ? 0 : curPosition - 280;

    setPosition(curPosition);
  };

  const handleSlider = e => {
    if (e.target.name.includes('prev') || e.target.name.includes('next')) {
      moveSlider(e.target.name);
    }
  };

  const handleSearchKeyword = keyword => {
    dispatch(setKeyword(keyword));
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
