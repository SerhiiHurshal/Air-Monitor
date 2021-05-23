import { FC, RefObject } from 'react';

import styles from './card.module.scss';

interface CardProps {
  title: string;
  innerRef?: RefObject<HTMLDivElement>;
}

const Card: FC<CardProps> = ({ title, children, innerRef = null }) => (
  <div className={styles.card}>
    <h2 className={styles.title} ref={innerRef}>
      {title}
    </h2>
    <main className={styles.content}>{children}</main>
    <footer className={styles.footer} />
  </div>
);

export { Card };
