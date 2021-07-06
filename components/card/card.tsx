import { State } from '@redux/state';
import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import styles from './card.module.scss';

interface CardProps {
  title: string;
  shadow: string;
}

const Card: FC<CardProps> = ({ title, children, shadow }) => {
  const { isCardLoading } = useSelector((state: State) => state.ui);

  return (
    <div className={styles.card}>
      {isCardLoading ? (
        <div className={styles.animatedBackground}></div>
      ) : (
        <Fragment>
          <h2 className={styles.title} style={{ boxShadow: shadow }}>
            {title}
          </h2>
          <main className={styles.content}>{children}</main>
          <footer className={styles.footer} />
        </Fragment>
      )}
    </div>
  );
};

export { Card };
