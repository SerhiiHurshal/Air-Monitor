import { reducer } from 'redux-chill';
import { UIState } from './state';
import { setCardLoading, setSearchLoading, setTheme } from './actions';

const uiReducer = reducer(new UIState())
  .on(setTheme, (state, theme) => {
    state.theme = theme;
  })
  .on(setCardLoading, (state, isCardLoading) => {
    state.isCardLoading = isCardLoading;
  })
  .on(setSearchLoading, (state, isSearchLoading) => {
    state.isSearchLoading = isSearchLoading;
  });

export { uiReducer };
