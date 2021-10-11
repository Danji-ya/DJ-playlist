import { createAction, handleActions } from 'redux-actions';
import { setItem } from '../../util/localstorage';
import { getInitTheme } from '../../util/utils';

// action 정의

const SET_MODE = 'common/SET_MODE';

// action obj 생성
export const setMode = createAction(SET_MODE, mode => mode);

// init state
const initialState = {
  mode: getInitTheme(),
  sample: '',
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
  },
  initialState,
);

export default common;
