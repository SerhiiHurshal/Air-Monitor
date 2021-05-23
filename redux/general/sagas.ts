import { all, takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import {
  airPollutionInfoData,
  getPlacesAction,
  mapboxFeature,
  mapboxPlaces,
  setSelectedPlaceAction,
  weatherInfo,
} from 'types';
import { GET_INFO_BY_IP, GET_PLACES, SET_CURRENT_PLACE } from './action-types';
import {
  setAirPollutionInfo,
  setPlaces,
  setSelectedPlace,
  setWeatherInfo,
} from './actions';

/**
 * General saga
 */
function* generalSaga() {
  yield all([watchGetPlaces(), watchGetInfo(), watchGetInfoByIp()]);
}

/**
 * Get Places
 */
const fetchPlaces = async (userInput: string) => {
  const response = await fetch(
    `http://localhost:3000/api/location/${userInput}`,
  );

  const data: mapboxPlaces = await response.json();

  return data;
};

function* getPlaces({
  payload,
}: getPlacesAction): Generator<any, void, mapboxFeature[]> {
  const places = yield call(fetchPlaces, payload);

  const parsedPlaces = places?.map((feature: mapboxFeature) => ({
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
 * Get info
 */
const fetchWeatherInfo = async (coords: [number, number]) => {
  const response = await fetch(
    `http://localhost:3000/api/weather/${coords[1]},${coords[0]}`,
  );

  const data = await response.json();

  return data;
};

const fetchAirPollutionInfo = async (coords: [number, number]) => {
  const response = await fetch(
    `http://localhost:3000/api/air-pollution?coords:${coords[1]};${coords[0]}`,
  );

  const data = await response.json();

  return data;
};

function* getInfo(action: setSelectedPlaceAction): Generator<any, void, any> {
  const airPollutionInfo: airPollutionInfoData = yield call(
    fetchAirPollutionInfo,
    action.payload.center,
  );
  const weatherInfo: weatherInfo = yield call(
    fetchWeatherInfo,
    action.payload.center,
  );

  yield put(setWeatherInfo(weatherInfo));
  yield put(setAirPollutionInfo(airPollutionInfo));
}

function* watchGetInfo() {
  yield takeEvery(SET_CURRENT_PLACE, getInfo);
}

/**
 * Get info by ip
 */
const fetchAirPollutionInfoByIp = async () => {
  const response = await fetch(`http://localhost:3000/api/air-pollution`);

  const data = await response.json();

  return data;
};

function* getInfoByIp(): Generator<any, void, any> {
  const airPollutionInfo: airPollutionInfoData = yield call(
    fetchAirPollutionInfoByIp,
  );

  const place = {
    id: airPollutionInfo.idx.toString(),
    name: airPollutionInfo.city.name,
    center: airPollutionInfo.city.geo
      .map((coord: string) => Number(coord))
      .reverse() as [number, number],
  };

  const weatherInfo: weatherInfo = yield call(fetchWeatherInfo, place.center);

  yield put(setAirPollutionInfo(airPollutionInfo));
  yield put(setWeatherInfo(weatherInfo));

  yield put(setSelectedPlace(place));
}

function* watchGetInfoByIp() {
  yield takeLatest(GET_INFO_BY_IP, getInfoByIp);
}

export { generalSaga };
