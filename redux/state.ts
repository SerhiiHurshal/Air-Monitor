import { GeneralState } from './general/state';

const general = new GeneralState();

/**
 * App state
 */
type State = {
  general: typeof general;
};

export type { State };
