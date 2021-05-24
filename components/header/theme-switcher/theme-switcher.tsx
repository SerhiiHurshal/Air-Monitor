import { setTheme } from '@redux/general/actions';
import { State } from '@redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeSwitcherComponent } from './theme-switcher.component';

export enum themeVariants {
  light = 'light',
  dark = 'dark',
}

const ThemeSwitcher = () => {
  const { theme } = useSelector((state: State) => state.general);
  const dispatch = useDispatch();

  const onThemeSwitch = () => {
    const newTheme =
      theme === themeVariants.light.toString()
        ? themeVariants.dark
        : themeVariants.light;

    dispatch(setTheme(newTheme));
  };

  const props = {
    theme,
    onThemeSwitch,
    themeVariants,
  };

  return <ThemeSwitcherComponent {...props} />;
};

export { ThemeSwitcher };
