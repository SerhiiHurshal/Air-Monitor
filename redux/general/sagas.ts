import { all, takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import {
  airPollutionInfo,
  getPlacesAction,
  mapboxFeature,
  mapboxPlaces,
  setSelectedPlaceAction,
} from 'types';
import {
  GET_AIR_POLLUTION_BY_IP,
  GET_PLACES,
  SET_CURRENT_PLACE,
} from './action-types';
import { setAirPollutionInfo, setPlaces, setSelectedPlace } from './actions';

/**
 * General saga
 */
function* generalSaga() {
  yield all([
    watchGetPlaces(),
    watchGetAirPollutionInfo(),
    watchGetAirPollutionInfoByIp(),
  ]);
}

/**
 * Get Places
 */
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

/**
 * Get air pollution info
 */

const fetchAirPollution = async (coords: [number, number]) => {
  const response = await fetch(
    `https://api.waqi.info/feed/geo:${coords[1]};${coords[0]}/?token=${process.env.NEXT_PUBLIC_AIR_QUALITY_TOKEN}`,
  );

  const data = await response.json();

  return data;
};

function* getAirPollutionInfo(
  action: setSelectedPlaceAction,
): Generator<any, void, airPollutionInfo> {
  const info = yield call(fetchAirPollution, action.payload.center);

  yield put(setAirPollutionInfo(info));
}

function* watchGetAirPollutionInfo() {
  yield takeEvery(SET_CURRENT_PLACE, getAirPollutionInfo);
}

/**
 * Get air pollution info by ip
 */

const fetchAirPollutionInfoByIp = async () => {
  const response = await fetch(
    `https://api.waqi.info/feed/here/?token=${process.env.NEXT_PUBLIC_AIR_QUALITY_TOKEN}`,
  );

  const data = await response.json();

  return data;
};

function* getAirPollutionInfoByIp(): Generator<any, void, airPollutionInfo> {
  const info = yield call(fetchAirPollutionInfoByIp);

  yield put(setAirPollutionInfo(info));

  const place = {
    id: info.data.idx.toString(),
    name: info.data.city.name,
    center: info.data.city.geo.map((coord) => Number(coord)).reverse() as [
      number,
      number,
    ],
  };

  yield put(setSelectedPlace(place));
}

function* watchGetAirPollutionInfoByIp() {
  yield takeLatest(GET_AIR_POLLUTION_BY_IP, getAirPollutionInfoByIp);
}

export { generalSaga };
