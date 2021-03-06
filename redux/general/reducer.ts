import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import {
  getWeatherInfo,
  getPlaces,
  setSelectedPlace,
  setError,
} from './actions';

const generalReducer = reducer(new GeneralState())
  .on(getWeatherInfo.success, (state, weatherInfo) => {
    state.weatherInfo = weatherInfo;
  })
  .on(getPlaces.success, (state, avaliablePlaces) => {
    state.avaliablePlaces = avaliablePlaces;
  })
  .on(setSelectedPlace.success, (state, selectedPlace) => {
    state.selectedPlace = selectedPlace;
  })
  .on(setError, (state, error) => {
    state.error = error;
  });

export { generalReducer };
