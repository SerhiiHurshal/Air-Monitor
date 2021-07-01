import createSagaMiddleware from 'redux-saga';
import { createStore as reduxCreateStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { run } from 'redux-chill';
import { app } from './rootReducer';
import { sagas } from './sagas';
import * as api from '@api-services';

type Context = {store: Store, api: typeof api}

/**
 * Create redux store
 */
const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const applied = applyMiddleware(sagaMiddleware);

  const store = reduxCreateStore(app, composeWithDevTools(applied));

  run(sagaMiddleware, sagas, { store, api });

  return store;
};

export { createStore };  
export type { Context };

