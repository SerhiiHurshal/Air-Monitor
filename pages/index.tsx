import Header from '@components/header/header.component';
import MainContent from '@components/main-content/main-content.component';
import Head from 'next/head';
import React, { Fragment } from 'react';

const Home = () => {
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
      <footer>Footer</footer>
    </Fragment>
  );
};

export default Home;
