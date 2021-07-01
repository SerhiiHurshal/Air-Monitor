import {
  AirPollutionInfo,
  Coords,
  Place,
  Theme,
  WeatherInfo,
} from '@models/client';
import { make } from 'redux-chill';

const getWeatherInfo = make('[general] get weather info')
  .stage((coords?: Coords) => coords)
  .stage('success', (weatherInfo: WeatherInfo) => weatherInfo);

const getAirPollutionInfo = make('[general] get air pollution info')
  .stage((coords: Coords) => coords)
  .stage('success', (apiPollutionInfo: AirPollutionInfo) => apiPollutionInfo);

const getPlaces = make('[general] get places')
  .stage((userInput: string) => userInput)
  .stage('success', (places: Place[]) => places);

const setSelectedPlace = make('[general] set selected place')
  .stage((place: Place) => place)
  .stage('success', (place: Place) => place);

const setTheme = make('[general] set theme').stage((theme: Theme) => theme);

export {
  getWeatherInfo,
  getAirPollutionInfo,
  getPlaces,
  setSelectedPlace,
  setTheme,
};
