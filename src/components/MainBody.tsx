import React, { useState, useRef } from 'react';
import MusicCard from './common/MusicCard';
import { images } from '../constants';
import Sidebar from './common/Sidebar';
import { DjplayContainer, MainBodyContainer, PlaylistTitleWrapper } from '../styles/mainBody';
import { IMusic } from '../@types/music';

function MainBody({ djPlaylist, handleSelectMusic, handleSwapDjplayList }: any) {
  const startEl = useRef<any>(null);

  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    startEl.current = e.target;
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const desIdx = e.currentTarget.dataset.idx;
    if (!desIdx || !startEl.current) return;

    const route = {
      oriIdx: startEl.current.dataset.idx,
      desIdx,
    };

    handleSwapDjplayList(route);
    startEl.current = null;
  }

  return (
    <MainBodyContainer>
      <Sidebar />
      <PlaylistTitleWrapper>
        <img src={images.logo} alt="" />
      </PlaylistTitleWrapper>

      <DjplayContainer>
        {djPlaylist.map((item: IMusic, idx: string) => (
          <MusicCard
            key={item.videoId}
            item={item}
            draggAble
            handleSelectMusic={handleSelectMusic}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            idx={idx}
          />
        ))}
      </DjplayContainer>
    </MainBodyContainer>
  );
}

export default MainBody;
