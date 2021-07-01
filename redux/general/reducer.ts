import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import {
  getAirPollutionInfo,
  getWeatherInfo,
  getPlaces,
  setSelectedPlace,
  setTheme,
} from './actions';

const generalReducer = reducer(new GeneralState())
  .on(getWeatherInfo.success, (state, weatherInfo) => {
    state.weatherInfo = weatherInfo;
  })
  .on(getAirPollutionInfo.success, (state, airPollutionInfo) => {
    state.airPollutionInfo = airPollutionInfo;
  })
  .on(getPlaces.success, (state, avaliablePlaces) => {
    state.avaliablePlaces = avaliablePlaces;
  })
  .on(setSelectedPlace.success, (state, selectedPlace) => {
    state.selectedPlace = selectedPlace;
  })
  .on(setTheme, (state, theme) => {
    state.theme = theme;
  });

export { generalReducer };
