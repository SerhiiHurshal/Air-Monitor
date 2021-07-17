import { Payload, Saga } from 'redux-chill';
import { changeTheme } from 'utils/changeTheme';
import { setTheme } from './actions';

/**
 * General saga
 */
class UISaga {
  /**
   * Set theme
   */
  @Saga(setTheme)
  public *setTheme(theme: Payload<typeof setTheme>) {
    changeTheme(theme);
  }
}

export { UISaga };
