import { combineReducers } from 'redux';
import { generalReducer } from './general/reducer';

/**
 * Root reducer
 */
const app = combineReducers({
  general: generalReducer,
});

export { app };
