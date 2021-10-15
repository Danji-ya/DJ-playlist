import { call, put, select, takeEvery } from 'redux-saga/effects';
import { fetchPlayList } from '../../api/youtube';
import {
  addDjplaylistSuccess,
  ADD_DJPLAYLIST,
  deleteDjplaylistSuccess,
  DELETE_DJPLAYLIST,
  getMusicListFail,
  getMusicListSuccess,
  GET_MUSICLIST,
} from '../modules/music';
import { setItem } from '../../util/localstorage';

function* getMusicList({ payload: keyword }) {
  // console.log('음악 찾기 시작...', keyword);
  try {
    const data = yield call(fetchPlayList, `${keyword} 플레이리스트`);
    yield put(getMusicListSuccess(data));
  } catch (e) {
    // yield put(getMusicListFail(e));
    console.log(e);
  }
}

function* addDjplaylist({ payload: selectedMusic }) {
  const djPlaylist = yield select(state => state.music.djPlaylist);

  const isIncludeMusic =
    djPlaylist.filter(item => item.videoId === selectedMusic.videoId).length > 0;

  if (isIncludeMusic) {
    // nothing...
    console.log('이미 존재하는 음악입니다');
  } else {
    yield call(setItem, 'djplaylist', [selectedMusic, ...djPlaylist]);
    yield put(addDjplaylistSuccess(selectedMusic));
  }
}

function* deleteDjplaylist({ payload: selectedMusic }) {
  const djPlaylist = yield select(state => state.music.djPlaylist);

  const newList = djPlaylist.filter(item => item.videoId !== selectedMusic.videoId);

  yield call(setItem, 'djplaylist', [...newList]);
  yield put(deleteDjplaylistSuccess(newList));
}

export default function* watchMusic() {
  yield takeEvery(GET_MUSICLIST, getMusicList);
  yield takeEvery(ADD_DJPLAYLIST, addDjplaylist);
  yield takeEvery(DELETE_DJPLAYLIST, deleteDjplaylist);
}
