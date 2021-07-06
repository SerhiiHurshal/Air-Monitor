import { Fragment, useEffect } from 'react';
import { Header } from '@components/header/header.component';
import { MainContent } from '@components/main-content/main-content.component';
import { Footer } from '@components/footer/footer';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@redux/state';
import { Theme } from '@models/client';
import { setTheme } from '@redux/ui/actions';

const Home = () => {
  const { theme } = useSelector((state: State) => state.ui);
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

  useEffect(() => {
    const body = document.getElementsByTagName('body');

    body[0].className = theme;
    body[0].style.backgroundColor = theme === 'light' ? '#fff' : '#4f4d4d';
  }, [theme]);

  return (
    <Fragment>
      <Head>
        <title>Air monitor</title>
        <meta
          name='description'
          content='Information about air pollution and current weather anywhere in the world'
        />
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  );
};

export default Home;
