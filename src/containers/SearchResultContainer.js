import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResult from '../components/SearchResult';
import { setSelectedMusic } from '../store/modules/music';
import { restructuring } from '../util/utils';

function SearchResultContainer() {
  const dispatch = useDispatch();
  const musicList = useSelector(state => state.music.musicList);

  const data = musicList.items?.map(item => restructuring(item));

  // const musicLisfft = {
  //   nextPageToken: 'CAUQAA',
  //   items: [
  //     {
  //       id: { videoId: 'KZPYfBoKC74' },
  //       snippet: {
  //         title:
  //           '[Playlist] 난 연애는 안하지만, 선곡은 잘하지 l 일하면서 듣기좋은 노래모음 플레이리스트',
  //         channelTitle: '눈에띠네',
  //         thumbnails: {
  //           high: {
  //             url: 'https://i.ytimg.com/vi/KZPYfBoKC74/hqdefault.jpg',
  //           },
  //         },
  //       },
  //     },
  //     {
  //       id: { videoId: 'uBFoOmFBwsY' },
  //       snippet: {
  //         title: '[Playlist] 늦은 밤 아무 생각 없이 꺼내듣는 감성 발라드 모음',
  //         channelTitle: '레몬쓰',
  //         thumbnails: {
  //           high: {
  //             url: 'https://i.ytimg.com/vi/uBFoOmFBwsY/hqdefault.jpg',
  //           },
  //         },
  //       },
  //     },
  //     {
  //       id: { videoId: 'cbuZfY2S2UQ' },
  //       snippet: {
  //         title: '[ 𝑷𝒍𝒂𝒚𝒍𝒊𝒔𝒕 ]  코딩할때 듣기 좋은 노래 • lofi type beat • 3 hours',
  //         channelTitle: 'yanu_연우',
  //         thumbnails: {
  //           high: {
  //             url: 'https://i.ytimg.com/vi/cbuZfY2S2UQ/hqdefault.jpg',
  //           },
  //         },
  //       },
  //     },
  //   ],
  // };

  const handleSelectMusic = music => {
    dispatch(setSelectedMusic(music));
  };

  return <SearchResult musicList={data} handleSelectMusic={handleSelectMusic} />;
}

export default SearchResultContainer;
