import { createAction, handleActions } from 'redux-actions';
import { setItem } from '../../utils/localstorage';
import { getInitTheme } from '../../utils/common';

const SET_MODE = 'common/SET_MODE' as const;

export const setMode = createAction(SET_MODE);

const initialState = {
  mode: getInitTheme(),
};

const common = handleActions(
  {
    [SET_MODE]: (state) => {
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
