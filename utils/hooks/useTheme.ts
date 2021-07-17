import { Theme } from '@models/client';
import { setTheme } from '@redux/ui/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useTheme = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let theme: Theme;
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme') as Theme;
    } else {
      theme = window.matchMedia('(prefers-color-sheme)').matches
        ? Theme.light
        : Theme.dark;
    }

    dispatch(setTheme(theme));
  }, []);
};

export { useTheme };
