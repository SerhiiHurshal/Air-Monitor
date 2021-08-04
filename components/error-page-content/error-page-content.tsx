import { Fragment } from 'react';
import Link from 'next/link';

import styles from './error-page-content.module.scss';

const ErrorPageContent = () => {
  return (
    <Fragment>
      <div className={styles.title}>Something went wrong...</div>
      <Link href={`${process.env.NEXT_PUBLIC_API_URL}`}>
        <p className={styles.linkback}>&#8617; Go back to the main page</p>
      </Link>
    </Fragment>
  );
};

export { ErrorPageContent };
