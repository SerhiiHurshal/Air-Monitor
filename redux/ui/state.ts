import { Theme } from '@models/client';

/**
 * General state
 */
class UIState {
  /**
   * Theme
   */
  public theme: Theme = Theme.light;

  /**
   * Control is cards loading
   */
  public isCardLoading: boolean = true;

  /**
   * Control is search input loading
   */
  public isSearchLoading: boolean = true;
}

export { UIState };
