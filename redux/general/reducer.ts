import { setSelectedPlaceAction, setPlacesAction } from 'types';
import { SET_CURRENT_PLACE, SET_PLACES } from './action-types';
import { GeneralState } from './state';

const generalReducer = (
  state = new GeneralState(),
  action: setPlacesAction & setSelectedPlaceAction,
): GeneralState => {
  switch (action.type) {
    case SET_PLACES:
      return { ...state, avaliablePlaces: action.payload };
    case SET_CURRENT_PLACE:
      return { ...state, selectedPlace: action.payload };
    default:
      return state;
  }
};

export { generalReducer };
