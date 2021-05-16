import { place } from 'types';

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
}

export { GeneralState };
