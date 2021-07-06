import { GeneralState } from './general/state';
import { UIState } from './ui/state';

const general = new GeneralState();
const ui = new UIState();

/**
 * App state
 */
type State = {
  general: typeof general;
  ui: typeof ui;
};

export type { State };
