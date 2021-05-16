import { place } from 'types';
import { GET_PLACES, SET_CURRENT_PLACE, SET_PLACES } from './action-types';

const getPlaces = (userInput: string) => ({
  type: GET_PLACES,
  payload: userInput,
});

const setPlaces = (places: place[]) => ({
  type: SET_PLACES,
  payload: places,
});

const setSelectedPlace = (place: place) => ({
  type: SET_CURRENT_PLACE,
  payload: place,
});

export { getPlaces, setSelectedPlace, setPlaces };
