import { combineReducers } from 'redux';
import common from './modules/common';

const rootReducer = combineReducers({
  common,
});

export default rootReducer;
