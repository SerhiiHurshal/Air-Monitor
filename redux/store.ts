import createSagaMiddleware from 'redux-saga';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { app } from './rootReducer';
import { rootSaga } from './rootSaga';

/**
 * Create redux store
 */
const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const applied = applyMiddleware(sagaMiddleware);

  const store = reduxCreateStore(app, composeWithDevTools(applied));

  sagaMiddleware.run(rootSaga);

  return store;
};

export { createStore };
