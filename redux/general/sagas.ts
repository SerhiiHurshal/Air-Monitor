import { AirPollutionInfo, Coords, Place, WeatherInfo } from '@models/client';
import { Context } from '@redux/store';
import { setCardLoading, setSearchLoading } from '@redux/ui/actions';
import { Payload, Saga } from 'redux-chill';
import { all, put, call } from 'redux-saga/effects';
import {
  getAirPollutionInfo,
  getWeatherInfo,
  setSelectedPlace,
  getPlaces,
} from './actions';

/**
 * General saga
 */
class GeneralSaga {
  /**
   * Get weather info
   */
  @Saga(getWeatherInfo)
  public *getWeatherInfo(
    coords: Payload<typeof getWeatherInfo>,
    {
      api: { fetchAirPollutionInfo, fetchWeatherInfo, fetchUserCoords },
    }: Context,
  ) {
    let parsedCoords = coords as Coords;

    yield put(setCardLoading(true));

    //get user current coords from IP
    if (!coords) {
      const coords: Coords = yield call(fetchUserCoords);
      parsedCoords = coords.latitude
        ? coords
        : { latitude: 51.5, longitude: 0.1 };
    }

    const [airPollutionInfo, weatherInfo]: [
      AirPollutionInfo,
      WeatherInfo,
    ] = yield all([
      call(fetchAirPollutionInfo, parsedCoords),
      call(fetchWeatherInfo, parsedCoords),
    ]);

    const place: Place = {
      id: airPollutionInfo.idx.toString(),
      name: airPollutionInfo.city.name,
      center: {
        latitude: +airPollutionInfo.city.geo[0],
        longitude: +airPollutionInfo.city.geo[1],
      },
    };

    yield all([
      put(getWeatherInfo.success(weatherInfo)),
      put(getAirPollutionInfo.success(airPollutionInfo)),
      put(setSelectedPlace.success(place)),
    ]);

    yield put(setCardLoading(false));
  }

  /**
   * Get predicted places
   */
  @Saga(getPlaces)
  public *getPlaces(
    userInput: Payload<typeof getPlaces>,
    { api: { fetchPlaces } }: Context,
  ) {
    yield put(setSearchLoading(true));

    const places: Place[] = yield call(fetchPlaces, userInput);

    yield put(getPlaces.success(places));

    yield put(setSearchLoading(false));
  }

  /**
   * Set selected place
   */
  @Saga(setSelectedPlace)
  public *setSelectedPlace(place: Payload<typeof setSelectedPlace>) {
    yield put(getWeatherInfo(place.center));

    yield put(setSelectedPlace.success(place));
  }
}

export { GeneralSaga };
