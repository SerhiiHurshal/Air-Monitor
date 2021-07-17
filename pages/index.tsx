import { Fragment } from 'react';
import { Header } from '@components/header/header.component';
import { MainContent } from '@components/main-content/main-content.component';
import { Footer } from '@components/footer/footer';
import Head from 'next/head';
import { useTheme } from 'utils/hooks/useTheme';

const Home = () => {
  useTheme();

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
