import React, { useCallback, useRef } from 'react';
import MusicCard from './common/MusicCard';
import { images } from '../constants';
import Sidebar from './common/Sidebar';
import {
  DjplayContainer,
  MainBodyContainer,
  PlaylistTitleWrapper,
} from '../styles/mainBody';
import { IMusic, ISwapRoute } from '../@types/music';

interface Props {
  djPlaylist: IMusic[];
  handleSelectMusic: (music: IMusic) => void;
  handleSwapDjplayList: (route: ISwapRoute) => void;
}

function MainBody({
  djPlaylist,
  handleSelectMusic,
  handleSwapDjplayList,
}: Props) {
  const startEl = useRef<any>(null);

  const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    startEl.current = e.target;
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const desIdx = Number(e.currentTarget.dataset.idx);

      if (desIdx == null || !startEl.current) return;

      const route = {
        oriIdx: Number(startEl.current.dataset.idx),
        desIdx,
      };

      handleSwapDjplayList(route);
      startEl.current = null;
    },
    [handleSwapDjplayList],
  );

  return (
    <MainBodyContainer>
      <Sidebar />
      <PlaylistTitleWrapper>
        <img src={images.logo} alt="로고" />
      </PlaylistTitleWrapper>

      <DjplayContainer>
        {djPlaylist.map((item: IMusic, idx: number) => (
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
