import { Theme } from '@models/client';
import { make } from 'redux-chill';

/**
 * Set app theme
 */
const setTheme = make('[ui] set theme').stage((theme: Theme) => theme);

/**
 * Set card loader
 */
const setCardLoading = make('[ui] set is card loading').stage(
  (isCardLoading: boolean) => isCardLoading,
);

/**
 * Set search loader
 */
const setSearchLoading = make('[ui] set is search loading').stage(
  (isSearchLoading: boolean) => isSearchLoading,
);

export { setTheme, setCardLoading, setSearchLoading };
