import React, { useCallback, useRef } from 'react';
import MusicCard from './common/MusicCard';
import { icons, images } from '../constants';
import Sidebar from './common/Sidebar';
import * as Styled from '../styles/mainBody';
import { IMusic, ISwapRoute } from '../@types/music';
import { MESSAGE } from '../constants/messages';

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
    <>
      <Sidebar />
      <Styled.PlaylistTitleWrapper>
        <icons.Logo width={65} height={65} />
      </Styled.PlaylistTitleWrapper>

      {djPlaylist.length > 0 ? (
        <Styled.DjplayContainer>
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
        </Styled.DjplayContainer>
      ) : (
        <Styled.EmptyContainer>
          <images.Cat2 width={350} height={350} />
          <Styled.EmptyTitle>{MESSAGE.EMPTY_PLAYLIST}</Styled.EmptyTitle>
        </Styled.EmptyContainer>
      )}
    </>
  );
}

export default MainBody;
