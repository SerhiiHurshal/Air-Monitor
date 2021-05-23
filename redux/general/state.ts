import { airPollutionInfo, place } from 'types';

/**
 * General state
 */
class GeneralState {
  /**
   * Current place
   */
  public selectedPlace: place | null = null;

  /**
   * Avaliable places
   */
  public avaliablePlaces: place[] = [];

  /**
   * Air pollution info
   */
  public airPollutionInfo: airPollutionInfo | null = null;
}

export { GeneralState };
