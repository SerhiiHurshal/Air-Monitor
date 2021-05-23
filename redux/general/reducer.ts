import {
  setSelectedPlaceAction,
  setPlacesAction,
  setAirPollutionInfoAction,
} from 'types';
import {
  SET_AIR_POLLUTION_INFO,
  SET_CURRENT_PLACE,
  SET_PLACES,
} from './action-types';
import { GeneralState } from './state';

const generalReducer = (
  state = new GeneralState(),
  action: setPlacesAction & setSelectedPlaceAction & setAirPollutionInfoAction,
): GeneralState => {
  switch (action.type) {
    case SET_PLACES:
      return { ...state, avaliablePlaces: action.payload };
    case SET_CURRENT_PLACE:
      return { ...state, selectedPlace: action.payload };
    case SET_AIR_POLLUTION_INFO:
      return { ...state, airPollutionInfo: action.payload };
    default:
      return state;
  }
};

export { generalReducer };
