import { Coords, Place, WeatherInfo } from '@models/client';
import { Context } from '@redux/store';
import { setCardLoading, setSearchLoading } from '@redux/ui/actions';
import { Payload, Saga } from 'redux-chill';
import { put, call } from 'redux-saga/effects';
import { getWeatherInfo, setSelectedPlace, getPlaces } from './actions';

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
    { api: { fetchWeatherInfo, fetchUserCoords } }: Context,
  ) {
    let parsedCoords = coords as Coords;

    yield put(setCardLoading(true));

    if (!coords && localStorage.getItem('place')) {
      const defaultPlace: Place = JSON.parse(
        localStorage.getItem('place') as string,
      );

      parsedCoords = defaultPlace.center;
    }

    //get user current coords from IP
    if (!coords && !parsedCoords) {
      const coords: Coords = yield call(fetchUserCoords);
      parsedCoords = coords.latitude
        ? coords
        : { latitude: 51.5, longitude: 0.1 };
    }

    const weatherInfo: WeatherInfo = yield call(fetchWeatherInfo, parsedCoords);

    const place: Place = {
      id: weatherInfo.location.tz_id.toString(),
      name: weatherInfo.location.name,
      center: {
        latitude: weatherInfo.location.lat,
        longitude: weatherInfo.location.lon,
      },
    };

    yield put(getWeatherInfo.success(weatherInfo));

    if (!coords) {
      yield put(setSelectedPlace.success(place));
      localStorage.setItem('place', JSON.stringify(place));
    }

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

    localStorage.setItem('place', JSON.stringify(place));
    yield put(setSelectedPlace.success(place));
  }
}

export { GeneralSaga };
