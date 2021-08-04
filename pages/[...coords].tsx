import { Fragment, useEffect } from 'react';
import { Header } from '@components/header/header.component';
import { MainContent } from '@components/main-content/main-content.component';
import { Footer } from '@components/footer/footer';
import Head from 'next/head';
import { useTheme } from 'utils/hooks/useTheme';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { getWeatherInfo } from '@redux/general/actions';

const Home = () => {
  useTheme();
  const {
    query: { coords },
  } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (coords) {
      const parsedCoords = {
        latitude: Number(coords[0].split(';')[0]),
        longitude: Number(coords[0].split(';')[1]),
      };

      dispatch(getWeatherInfo(parsedCoords));
    }
  }, [coords]);

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
