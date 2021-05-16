import { all, takeLatest, put, call } from 'redux-saga/effects';
import { getPlacesAction, mapboxFeature, mapboxPlaces } from 'types';
import { GET_PLACES } from './action-types';
import { setPlaces } from './actions';

/**
 * General saga
 */
function* generalSaga() {
  yield all([watchGetPlaces()]);
}

const fetchPlaces = async (userInput: string) => {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  );

  const data: mapboxPlaces = await response.clone().json();
  return data;
};

function* getPlaces({
  payload,
}: getPlacesAction): Generator<any, void, mapboxPlaces> {
  const places = yield call(fetchPlaces, payload);

  const parsedPlaces = places?.features?.map((feature: mapboxFeature) => ({
    id: feature.id,
    name: feature.place_name,
    center: feature.center,
  }));

  yield put(setPlaces(parsedPlaces));
}

function* watchGetPlaces() {
  yield takeLatest(GET_PLACES, getPlaces);
}

export { generalSaga };
