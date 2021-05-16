import { setPlacesAction } from 'types';
import { GeneralState } from './state';

const generalReducer = (
  state = new GeneralState(),
  action: setPlacesAction,
): GeneralState => {
  switch (action.type) {
    case 'SET_PLACES':
      return { ...state, avaliablePlaces: action.payload };
    default:
      return state;
  }
};

export { generalReducer };
