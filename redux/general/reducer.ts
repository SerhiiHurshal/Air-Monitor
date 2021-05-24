import {
  setSelectedPlaceAction,
  setPlacesAction,
  setAirPollutionInfoAction,
  setWeatherInfoAction,
} from 'types';
import {
  SET_AIR_POLLUTION_INFO,
  SET_CURRENT_PLACE,
  SET_PLACES,
  SET_THEME,
  SET_WEATHER_INFO,
} from './action-types';
import { GeneralState } from './state';

const generalReducer = (
  state = new GeneralState(),
  action: any,
): GeneralState => {
  switch (action.type) {
    case SET_PLACES:
      return { ...state, avaliablePlaces: action.payload };
    case SET_CURRENT_PLACE:
      return { ...state, selectedPlace: action.payload };
    case SET_AIR_POLLUTION_INFO:
      return { ...state, airPollutionInfo: action.payload };
    case SET_WEATHER_INFO:
      return { ...state, weatherInfo: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export { generalReducer };
