import { airPollutionInfo, place } from 'types';
import {
  GET_AIR_POLLUTION_BY_IP,
  GET_PLACES,
  SET_CURRENT_PLACE,
  SET_PLACES,
  SET_AIR_POLLUTION_INFO,
} from './action-types';

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

const getAirPollutionByIp = () => ({
  type: GET_AIR_POLLUTION_BY_IP,
});

const setAirPollutionInfo = (airPollutionInfo: airPollutionInfo) => ({
  type: SET_AIR_POLLUTION_INFO,
  payload: airPollutionInfo,
});

export {
  getPlaces,
  setSelectedPlace,
  setPlaces,
  getAirPollutionByIp,
  setAirPollutionInfo,
};
