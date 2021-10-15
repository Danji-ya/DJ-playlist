import { createAction, handleActions } from 'redux-actions';
import { setItem } from '../../util/localstorage';
import { getInitTheme } from '../../util/utils';

// action 정의

const SET_MODE = 'common/SET_MODE';
const SET_LOGINSTATE = 'common/SET_LOGINSTATE';

// action obj 생성
export const setMode = createAction(SET_MODE, mode => mode);
export const loginState = createAction(SET_LOGINSTATE, userInfo => userInfo);

// init state
const initialState = {
  mode: getInitTheme(),
  sample: '',
  isLogin: false,
  user: {
    email: '',
    familyName: '',
    givenName: '',
    imageUrl: '',
  },
};

// reducer 정의
const common = handleActions(
  {
    [SET_MODE]: (state, { payload: mode }) => {
      // setLocalstoage
      setItem('theme', !state.mode);

      return {
        ...state,
        mode: !state.mode,
      };
    },
    [SET_LOGINSTATE]: (state, { payload: userInfo }) => {
      return {
        ...state,
        isLogin: !state.isLogin,
        user: {
          ...state.user,
          email: userInfo.email || '',
          familyName: userInfo.familyName || '',
          givenName: userInfo.givenName || '',
          imageUrl: userInfo.imageUrl || '',
        },
      };
    },
  },
  initialState,
);

export default common;
