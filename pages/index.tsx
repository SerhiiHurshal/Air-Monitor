import { Fragment, useEffect } from 'react';
import { Header } from '@components/header/header.component';
import { MainContent } from '@components/main-content/main-content.component';
import { Footer } from '@components/footer/footer';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@redux/state';
import { setTheme } from '@redux/general/actions';

const Home = () => {
  const { theme } = useSelector((state: State) => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) dispatch(setTheme(theme));
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName('body');

    body[0].className = theme;
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
