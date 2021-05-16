import Header from '@components/header/header.component';
import Head from 'next/head';
import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Air monitor</title>
      </Head>
      <Header />
      <main>Air monitor</main>
      <footer>Footer</footer>
    </Fragment>
  );
};

export default Home;
