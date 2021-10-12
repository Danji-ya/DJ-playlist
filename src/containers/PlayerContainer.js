import React, { useEffect, useState } from 'react';
import { fetchPlayList } from '../api/youtube';
import Player from '../components/common/Player';

function PlayerContainer() {
  const selectedMusic = {
    videoId: 'Nh27WsNdymo',
    title: '[𝐅𝐮𝐥𝐥] 아이유 노래모음 | IU songs playlist',
    subtitle: '스너그 playlist',
    url: 'https://i.ytimg.com/vi/Nh27WsNdymo/hqdefault.jpg',
  };

  //   useEffect(() => {
  //     async function getData() {
  //       try {
  //         const data = await fetchPlayList('아이유');
  //         setSelectedMusic(data);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //     getData();
  //   }, []);

  return <Player selectedMusic={selectedMusic} />;
}

export default PlayerContainer;
