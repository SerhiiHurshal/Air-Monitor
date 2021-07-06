import { setTheme } from '@redux/ui/actions';
import { State } from '@redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { Theme } from '@models/client';

const ThemeSwitcher = () => {
  const { theme } = useSelector((state: State) => state.ui);
  const dispatch = useDispatch();

  const onThemeSwitch = () => {
    const newTheme =
      theme === Theme.light.toString() ? Theme.dark : Theme.light;

    dispatch(setTheme(newTheme));
  };

  const props = {
    theme,
    onThemeSwitch,
    Theme,
  };

  return <ThemeSwitcherComponent {...props} />;
};

export { ThemeSwitcher };
