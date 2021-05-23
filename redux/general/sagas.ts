import { all, takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import {
  airPollutionInfo,
  getPlacesAction,
  mapboxFeature,
  mapboxPlaces,
  setSelectedPlaceAction,
  weatherInfo,
} from 'types';
import {
  GET_AIR_POLLUTION_BY_IP,
  GET_PLACES,
  SET_CURRENT_PLACE,
} from './action-types';
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
 * Get info
 */

const fetchAirPollution = async (coords: [number, number]) => {
  const response = await fetch(
    `https://api.waqi.info/feed/geo:${coords[1]};${coords[0]}/?token=${process.env.NEXT_PUBLIC_AIR_QUALITY_TOKEN}`,
  );

  const data = await response.json();

  return data;
};

function* getInfo(action: setSelectedPlaceAction): Generator<any, void, any> {
  const airPollutionInfo = yield call(fetchAirPollution, action.payload.center);

  const weatherInfo = yield call(fetchWeatherInfoByIp, action.payload.center);

  yield put(setWeatherInfo(weatherInfo));
  yield put(setAirPollutionInfo(airPollutionInfo));
}

function* watchGetInfo() {
  yield takeEvery(SET_CURRENT_PLACE, getInfo);
}

/**
 * Get info by ip
 */

const fetchWeatherInfoByIp = async (coords: [number, number]) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&q=${coords[1]},${coords[0]}&aqi=no`,
  );

  const data = await response.json();

  return data;
};

const fetchAirPollutionInfoByIp = async () => {
  const response = await fetch(
    `https://api.waqi.info/feed/here/?token=${process.env.NEXT_PUBLIC_AIR_QUALITY_TOKEN}`,
  );

  const data = await response.json();

  return data;
};

function* getInfoByIp(): Generator<any, void, any> {
  const airPollutionInfo = yield call(fetchAirPollutionInfoByIp);

  yield put(setAirPollutionInfo(airPollutionInfo));

  const place = {
    id: airPollutionInfo.data.idx.toString(),
    name: airPollutionInfo.data.city.name,
    center: airPollutionInfo.data.city.geo
      .map((coord: string) => Number(coord))
      .reverse() as [number, number],
  };

  const weatherInfo: weatherInfo = yield call(
    fetchWeatherInfoByIp,
    place.center,
  );

  yield put(setWeatherInfo(weatherInfo));

  yield put(setSelectedPlace(place));
}

function* watchGetInfoByIp() {
  yield takeLatest(GET_AIR_POLLUTION_BY_IP, getInfoByIp);
}

export { generalSaga };
