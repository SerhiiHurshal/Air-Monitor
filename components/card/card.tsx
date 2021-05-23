import { FC } from 'react';
import styles from './card.module.scss';

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = ({ title, children }) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    {children}
  </div>
);

export { Card };
