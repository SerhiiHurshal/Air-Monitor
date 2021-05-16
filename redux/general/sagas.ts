import { all, takeLatest, put, call } from 'redux-saga/effects';

/**
 * General saga
 */
function* generalSaga() {
  yield all([watchGetPlaces()]);
}

const fetchPlaces = async (userInput: any) => {
  console.log(userInput);

  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  );

  const data = await response.clone().json();
  return data;
};

function* getPlaces({ payload }: any): Generator<any, any, any> {
  console.log(payload);

  const places = yield call(fetchPlaces, payload);

  const parsedPlaces = places.features.map((place: any) => ({
    id: place.id,
    name: place.place_name,
  }));

  yield put({ type: 'SET_PLACES', payload: parsedPlaces });
}

function* watchGetPlaces() {
  yield takeLatest('GET_PLACES', getPlaces);
}

export { generalSaga };
