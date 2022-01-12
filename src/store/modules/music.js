import { createAction, handleActions } from 'redux-actions';
import { getInitDjplaylist } from '../../util/utils';

// action 정의
export const GET_MUSICLIST = 'music/GET_MUSICLIST';
export const GET_MUSICLIST_SUCCESS = 'music/GET_MUSICLIST_SUCCESS';
export const GET_MUSICLIST_FAIL = 'music/GET_MUSICLIST_FAIL';
export const SET_MUSICLIST = 'music/SET_MUSICLIST';
export const SET_KEYWORD = 'music/SET_KEYWORD';
export const SET_SELECTEDMUSIC = 'music/SET_SELECTEDMUSIC';
export const NEXT_MUSIC = 'music/NEXT_MUSIC';
export const PREV_MUSIC = 'music/PREV_MUSIC';
export const ADD_DJPLAYLIST = 'music/ADD_DJPLAYLIST';
export const ADD_DJPLAYLIST_SUCCESS = 'music/ADD_DJPLAYLIST_SUCCESS';
export const DELETE_DJPLAYLIST = 'music/DELETE_DJPLAYLIST';
export const DELETE_DJPLAYLIST_SUCCESS = 'music/DELETE_DJPLAYLIST_SUCCESS';
export const SWAP_DJPLAYLIST = 'music/SWAP_DJPLAYLIST';
export const SWAP_DJPLAYLIST__SUCCESS = 'music/SWAP_DJPLAYLIST_SUCCESS';

// action obj 생성
export const setSelectedMusic = createAction(SET_SELECTEDMUSIC, selectedMusic => selectedMusic);
export const setKeyword = createAction(SET_KEYWORD, keyword => keyword);
export const getMusicList = createAction(GET_MUSICLIST, keyword => keyword);
export const addDjplaylist = createAction(ADD_DJPLAYLIST, selectedMusic => selectedMusic);
export const deleteDjplaylist = createAction(DELETE_DJPLAYLIST, selectedMusic => selectedMusic);
export const nextMusic = createAction(NEXT_MUSIC, curMusic => curMusic);
export const prevMusic = createAction(PREV_MUSIC, curMusic => curMusic);
export const swapDjplaylist = createAction(SWAP_DJPLAYLIST, route => route);

// saga에서 호출하는 액션 객체
export const getMusicListSuccess = createAction(GET_MUSICLIST_SUCCESS, musicList => musicList);
export const getMusicListFail = createAction(GET_MUSICLIST_FAIL, e => e);
export const addDjplaylistSuccess = createAction(
  ADD_DJPLAYLIST_SUCCESS,
  selectedMusic => selectedMusic,
);
export const deleteDjplaylistSuccess = createAction(DELETE_DJPLAYLIST_SUCCESS, newList => newList);
export const swapDjplaylistSuccess = createAction(
  SWAP_DJPLAYLIST__SUCCESS,
  newDjplaylist => newDjplaylist,
);

export const getKeyword = state => state.music.keyword;

// init state
const initialState = {
  keyword: '',
  musicList: [],
  selectedMusic: {},
  djPlaylist: getInitDjplaylist(),
};

// reducer 정의
const music = handleActions(
  {
    [GET_MUSICLIST_SUCCESS]: (state, { payload: musicList }) => {
      return {
        ...state,
        musicList,
      };
    },
    [SET_KEYWORD]: (state, { payload: keyword }) => {
      return {
        ...state,
        keyword,
      };
    },
    [SET_SELECTEDMUSIC]: (state, { payload: selectedMusic }) => {
      return {
        ...state,
        selectedMusic,
      };
    },
    [ADD_DJPLAYLIST_SUCCESS]: (state, { payload: selectedMusic }) => {
      return {
        ...state,
        djPlaylist: [selectedMusic, ...state.djPlaylist],
      };
    },
    [DELETE_DJPLAYLIST_SUCCESS]: (state, { payload: newList }) => {
      return {
        ...state,
        djPlaylist: newList,
      };
    },
    [SWAP_DJPLAYLIST__SUCCESS]: (state, { payload: newDjplaylist }) => {
      return {
        ...state,
        djPlaylist: newDjplaylist,
      };
    },
  },
  initialState,
);

export default music;
