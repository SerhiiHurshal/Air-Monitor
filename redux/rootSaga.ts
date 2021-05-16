import { all } from 'redux-saga/effects';
import { generalSaga } from './general/sagas';

/**
 * App sagas
 */
function* rootSaga() {
  yield all([generalSaga()]);
}

export { rootSaga };
