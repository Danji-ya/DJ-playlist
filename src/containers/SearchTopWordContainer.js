import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchTopWord from '../components/SearchTopWord';
import { setKeyword } from '../store/modules/music';

function SearchTopWordContainer() {
  const [position, setPosition] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const data = [
    {
      id: 'pXhSwzz1JtQU',
      src: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: '아이유',
    },
    {
      id: '1DF2GS4FFF',
      src: 'https://images.unsplash.com/photo-1530288782965-fbad40327074?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: '코딩할 때 듣기 좋은 노래',
    },
    {
      id: '1DF1114FGFF',
      src: 'https://images.unsplash.com/photo-1584679109594-56fffe50d527?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'BTS',
    },
    {
      id: '1DFDDD24FFF',
      src: 'https://images.unsplash.com/photo-1616663395403-2e0052b8e595?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: '크리스마스',
    },
    {
      id: '1DFsdDD24FGFF',
      src: 'https://images.unsplash.com/photo-1542728143-d9b537db6433?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: '인기 팝송',
    },
    {
      id: 'pXhwzDz1JtQU',
      src: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: '아이유',
    },
    {
      id: '1DF2AAF4FFF',
      src: 'https://images.unsplash.com/photo-1530288782965-fbad40327074?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: '코딩할 때 듣기 좋은 노래',
    },
    {
      id: '1DFD123114FFF',
      src: 'https://images.unsplash.com/photo-1584679109594-56fffe50d527?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'BTS',
    },
    {
      id: '1DFDDDG23414FFF',
      src: 'https://images.unsplash.com/photo-1616663395403-2e0052b8e595?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: '크리스마스',
    },
    {
      id: '1DFsdD4DD24FFF',
      src: 'https://images.unsplash.com/photo-1542728143-d9b537db6433?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: '인기 팝송',
    },
  ];

  // 최대 값 및 width 지정 다시.
  const imgTotalWidth = data.length * 265;

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
      data={data}
      handleSlider={handleSlider}
      handleSearchKeyword={handleSearchKeyword}
    />
  );
}

export default SearchTopWordContainer;
