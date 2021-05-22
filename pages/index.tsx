import Header from '@components/header/header.component';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'redux/state';

const Home = () => {
  const { selectedPlace } = useSelector((state: State) => state.general);

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
      {selectedPlace && <main>{selectedPlace.name}</main>}
      <footer>Footer</footer>
    </Fragment>
  );
};

export default Home;
