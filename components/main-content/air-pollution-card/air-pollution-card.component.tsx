import { Card } from '@components/card/card';
import { FC, RefObject } from 'react';

import LoadingIcon from '@images/loading.svg';
import GreenFace from '@images/face_icons/ic-face-green.svg';
import MaroonFace from '@images/face_icons/ic-face-maroon.svg';
import OrangeFace from '@images/face_icons/ic-face-orange.svg';
import PurpleFace from '@images/face_icons/ic-face-purple.svg';
import RedFace from '@images/face_icons/ic-face-red.svg';
import YellowFace from '@images/face_icons/ic-face-yellow.svg';

import styles from './air-pollution-card.module.scss';

interface Props {
  status: string;
  aqi: number;
  avg: number;
  max: number;
  min: number;
  cardRef: RefObject<HTMLDivElement>;
}

const AirPollutionCardComponent: FC<Props> = ({
  status,
  aqi,
  min,
  max,
  avg,
  cardRef,
}) => (
  <Card title='Air Pollution' innerRef={cardRef}>
    {aqi > 0 && aqi < 51 && <GreenFace className={styles.icon} />}
    {aqi < 101 && aqi > 50 && <YellowFace className={styles.icon} />}
    {aqi < 151 && aqi > 100 && <OrangeFace className={styles.icon} />}
    {aqi < 201 && aqi > 150 && <RedFace className={styles.icon} />}
    {aqi < 301 && aqi > 200 && <PurpleFace className={styles.icon} />}
    {aqi > 300 && <MaroonFace className={styles.icon} />}
    {!aqi && <LoadingIcon className={styles.icon} />}
    <p className={styles.status}>{status}</p>
    <div className={styles.aditionalInfoContainer}>
      <p className={styles.aditionalInfo}>{`AQI value: ${aqi}`}</p>
      {min && <p className={styles.aditionalInfo}>{`Minimum AQI: ${min}`}</p>}
      {max && <p className={styles.aditionalInfo}>{`Maximum AQI: ${max}`}</p>}
      {avg && <p className={styles.aditionalInfo}>{`Avarage AQI: ${avg}`}</p>}
    </div>
  </Card>
);
export { AirPollutionCardComponent };
