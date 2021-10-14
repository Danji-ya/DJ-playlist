import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import common from './modules/common';
import music from './modules/music';
import watchMusic from './sagas/musicSaga';

const rootReducer = combineReducers({
  common,
  music,
});

export function* rootSaga() {
  yield all([watchMusic()]);
}

export default rootReducer;
