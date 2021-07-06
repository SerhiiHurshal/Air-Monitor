import { AirPollutionInfo, Coords, Place, WeatherInfo } from '@models/client';
import { make } from 'redux-chill';

/**
 * Fetch weather info
 */
const getWeatherInfo = make('[general] get weather info')
  .stage((coords?: Coords) => coords)
  .stage('success', (weatherInfo: WeatherInfo) => weatherInfo);

/**
 * Fetch air pollution info
 */
const getAirPollutionInfo = make('[general] get air pollution info')
  .stage((coords: Coords) => coords)
  .stage('success', (apiPollutionInfo: AirPollutionInfo) => apiPollutionInfo);

/**
 * Fetch avaliable places by user input
 */
const getPlaces = make('[general] get places')
  .stage((userInput: string) => userInput)
  .stage('success', (places: Place[]) => places);

/**
 * Set selected place
 */
const setSelectedPlace = make('[general] set selected place')
  .stage((place: Place) => place)
  .stage('success', (place: Place) => place);

export { getWeatherInfo, getAirPollutionInfo, getPlaces, setSelectedPlace };
