import { Theme } from '@models/client';

const changeTheme = (theme: Theme) => {
  const body = document.getElementsByTagName('body');

  localStorage.setItem('theme', theme);

  body[0].className = theme;
  body[0].style.backgroundColor = theme === 'light' ? '#fff' : '#4f4d4d';
};

export { changeTheme };
