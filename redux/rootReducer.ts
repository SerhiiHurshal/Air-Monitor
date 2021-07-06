import { combineReducers } from 'redux';
import { generalReducer } from './general/reducer';
import { uiReducer } from './ui/reducer';

/**
 * Root reducer
 */
const app = combineReducers({
  general: generalReducer,
  ui: uiReducer,
});

export { app };
