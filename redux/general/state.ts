import { place } from 'types';

/**
 * General state
 */
class GeneralState {
  /**
   * Current place
   */
  public selectedPlace: string = '';

  /**
   * Avaliable places
   */
  public avaliablePlaces: place[] = [];
}

export { GeneralState };
