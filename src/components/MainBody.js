/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from 'react';
import MusicCard from './common/MusicCard';
import { images } from '../constants';
import Sidebar from './common/Sidebar';
import { DjplayContainer, MainBodyContainer, PlaylistTitleWrapper } from '../styles/mainBodyStyle';

function MainBody({ djPlaylist, handleSelectMusic, handleSwapDjplayList }) {
  const startEl = useRef(null);

  function handleDragStart(e) {
    startEl.current = e.target;
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    const desIdx = e.currentTarget.dataset.idx;
    if (!desIdx && !startEl.current) return;

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
        <img src={images.logo.default} alt="" />
      </PlaylistTitleWrapper>

      <DjplayContainer>
        {djPlaylist.map((item, idx) => (
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
