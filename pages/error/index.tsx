import React, { Fragment } from 'react';
import Head from 'next/head';
import { ErrorPageContent } from '@components/error-page-content/error-page-content';

const ErrorPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Error</title>
        <meta name='error' content='Information about error on website' />
      </Head>
      <ErrorPageContent />
    </Fragment>
  );
};

export default ErrorPage;
