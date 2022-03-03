import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
// import { fetchPlayList } from '../../api/youtube';
import {
  addDjplaylistSuccess,
  ADD_DJPLAYLIST,
  deleteDjplaylistSuccess,
  DELETE_DJPLAYLIST,
  swapDjplaylistSuccess,
  SWAP_DJPLAYLIST,
  // getMusicListSuccess,
  // getMusicListFail,
  // GET_MUSICLIST,
  NEXT_MUSIC,
  PREV_MUSIC,
  // setKeyword,
  setSelectedMusic,
} from '../modules/music';
import { setItem } from '../../utils/localstorage';
// import history from '../../utils/history';
import { IMusic } from '../../@types/music';

// function* getMusicList({ payload: keyword }: any) {
//   const beforeKeyword: string = yield select((state) => state.music.keyword);

//   try {
//     if (keyword === beforeKeyword) throw new Error('동일한 키워드 검색');

//     yield put(setKeyword(keyword));
//     const data: IMusic[] = yield call(fetchPlayList, `${keyword} 플레이리스트`);

//     yield put(getMusicListSuccess(data));
//     history.replace(`/search?query=${keyword}`);
//   } catch (e) {
//     // yield put(getMusicListFail(e));
//   }
// }

function* addDjplaylist({ payload: selectedMusic }: any) {
  const djPlaylist: IMusic[] = yield select((state) => state.music.djPlaylist);

  const isIncludeMusic =
    djPlaylist.filter((item) => item.videoId === selectedMusic.videoId).length >
    0;

  if (isIncludeMusic) return;

  // 1 level deep copy
  const copiedSelectedMusic = { ...selectedMusic };

  yield call(setItem, 'djplaylist', [copiedSelectedMusic, ...djPlaylist]);
  yield put(addDjplaylistSuccess(copiedSelectedMusic));
}

function* deleteDjplaylist({ payload: selectedMusic }: any) {
  const djPlaylist: IMusic[] = yield select((state) => state.music.djPlaylist);

  const newList = djPlaylist.filter(
    (item) => item.videoId !== selectedMusic.videoId,
  );

  yield call(setItem, 'djplaylist', [...newList]);
  yield put(deleteDjplaylistSuccess(newList));
}

function* prevMusic({ payload: curMusic }: any) {
  const djPlaylist: IMusic[] = yield select((state) => state.music.djPlaylist);
  const djPlaylistLen = djPlaylist.length - 1;

  const curPlayMusicIdx = djPlaylist.findIndex(
    (item) => item.videoId === curMusic.videoId,
  );
  if (curPlayMusicIdx === -1) return;
  const prevPlayMusic =
    djPlaylist[curPlayMusicIdx === 0 ? djPlaylistLen : curPlayMusicIdx - 1];
  yield put(setSelectedMusic(prevPlayMusic));
}

function* nextMusic({ payload: curMusic }: any) {
  const djPlaylist: IMusic[] = yield select((state) => state.music.djPlaylist);
  const djPlaylistLen = djPlaylist.length - 1;

  const curPlayMusicIdx = djPlaylist.findIndex(
    (item) => item.videoId === curMusic.videoId,
  );
  if (curPlayMusicIdx === -1) return;
  const nextPlayMusic =
    djPlaylist[curPlayMusicIdx === djPlaylistLen ? 0 : curPlayMusicIdx + 1];
  yield put(setSelectedMusic(nextPlayMusic));
}

function* swapMusicList({ payload: route }: any) {
  const { oriIdx, desIdx } = route || {};
  // 존재하지 않으면 패스
  if (!oriIdx || !desIdx) return;

  const djPlaylist: IMusic[] = yield select((state) => state.music.djPlaylist);
  const newDjplaylist = [...djPlaylist];

  const temp = newDjplaylist[desIdx];
  newDjplaylist[desIdx] = newDjplaylist[oriIdx];
  newDjplaylist[oriIdx] = temp;

  yield call(setItem, 'djplaylist', [...newDjplaylist]);
  yield put(swapDjplaylistSuccess(newDjplaylist));
}

export default function* watchMusic() {
  // yield takeEvery(GET_MUSICLIST, getMusicList);
  yield takeEvery(ADD_DJPLAYLIST, addDjplaylist);
  yield takeEvery(DELETE_DJPLAYLIST, deleteDjplaylist);
  yield takeLatest(PREV_MUSIC, prevMusic);
  yield takeLatest(NEXT_MUSIC, nextMusic);
  yield takeLatest(SWAP_DJPLAYLIST, swapMusicList);
}
