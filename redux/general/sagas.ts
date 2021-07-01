import { AirPollutionInfo, Coords, WeatherInfo } from '@models/client';
import { Context } from '@redux/store';
import { Payload, Saga } from 'redux-chill';
import { all, put, call } from 'redux-saga/effects';
import { getAirPollutionInfo, getWeatherInfo } from './actions';

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

    yield all([
      put(getWeatherInfo.success(weatherInfo)),
      put(getAirPollutionInfo.success(airPollutionInfo)),
    ]);
  }
}

export { GeneralSaga };
