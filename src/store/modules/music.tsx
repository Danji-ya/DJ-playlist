import { createAction, handleActions } from 'redux-actions';
import { getInitDjplaylist } from '../../utils/common';
import { IMusic, ISwapRoute } from '../../@types/music';

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
export const SWAP_DJPLAYLIST_SUCCESS = 'music/SWAP_DJPLAYLIST_SUCCESS';

// action obj 생성
export const setSelectedMusic = createAction(
  SET_SELECTEDMUSIC,
  (selectedMusic: IMusic) => selectedMusic,
);
export const setKeyword = createAction(
  SET_KEYWORD,
  (keyword: string) => keyword,
);
export const getMusicList = createAction(
  GET_MUSICLIST,
  (keyword: string) => keyword,
);
export const addDjplaylist = createAction(
  ADD_DJPLAYLIST,
  (selectedMusic: IMusic) => selectedMusic,
);
export const deleteDjplaylist = createAction(
  DELETE_DJPLAYLIST,
  (selectedMusic: IMusic) => selectedMusic,
);
export const nextMusic = createAction(
  NEXT_MUSIC,
  (curMusic: IMusic) => curMusic,
);
export const prevMusic = createAction(
  PREV_MUSIC,
  (curMusic: IMusic) => curMusic,
);
export const swapDjplaylist = createAction(
  SWAP_DJPLAYLIST,
  (route: ISwapRoute) => route,
);

// saga에서 호출하는 액션 객체
export const getMusicListSuccess = createAction(
  GET_MUSICLIST_SUCCESS,
  (musicList: IMusic[]) => musicList,
);
export const getMusicListFail = createAction(GET_MUSICLIST_FAIL, (e: any) => e);
export const addDjplaylistSuccess = createAction(
  ADD_DJPLAYLIST_SUCCESS,
  (selectedMusic: IMusic) => selectedMusic,
);
export const deleteDjplaylistSuccess = createAction(
  DELETE_DJPLAYLIST_SUCCESS,
  (newList: IMusic[]) => newList,
);
export const swapDjplaylistSuccess = createAction(
  SWAP_DJPLAYLIST_SUCCESS,
  (newDjplaylist: IMusic[]) => newDjplaylist,
);

// init state
const initialState = {
  keyword: '',
  nextPageToken: '',
  musicList: null,
  selectedMusic: {},
  djPlaylist: getInitDjplaylist(),
};

// reducer 정의
const music = handleActions<any>(
  {
    [GET_MUSICLIST_SUCCESS]: (state, { payload: { nextPageToken, items } }) => {
      return {
        ...state,
        nextPageToken: nextPageToken || '',
        musicList: [...items],
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
    [SWAP_DJPLAYLIST_SUCCESS]: (state, { payload: newDjplaylist }) => {
      return {
        ...state,
        djPlaylist: newDjplaylist,
      };
    },
  },
  initialState,
);

export default music;
