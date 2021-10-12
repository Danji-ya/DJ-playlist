import { createAction, handleActions } from 'redux-actions';

// action 정의

const SET_SELECTEDMUSIC = 'music/SET_SELECTEDMUSIC';
const ADD_DJPLAYLIST = 'music/ADD_DJPLAYLIST';
const REMOVE_DJPLAYLIST = 'music/REMOVE_DJPLAYLIST';

// action obj 생성
export const setSelectedMusic = createAction(SET_SELECTEDMUSIC, mode => mode);

// init state
const initialState = {
  selectedMusic: null,
  djPlaylist: [],
};

// reducer 정의
const music = handleActions(
  {
    [SET_SELECTEDMUSIC]: (state, { payload: selectedMusic }) => {
      return {
        ...state,
        selectedMusic,
      };
    },
    [ADD_DJPLAYLIST]: (state, { payload: selectedMusic }) => {
      return {
        ...state,
        djPlaylist: [selectedMusic, ...state.djPlaylist],
      };
    },
    [REMOVE_DJPLAYLIST]: (state, { payload: selectedMusic }) => {
      return {
        ...state,
        djPlaylist: state.djPlaylist.filter(item => item.id.videoId !== selectedMusic.id.videoId),
      };
    },
  },
  initialState,
);

export default music;
