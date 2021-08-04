import { Card } from '@components/card/card';
import { FC } from 'react';

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
  carbonMonoxide: number;
  ozone: number;
  nitrogenDioxide: number;
  sulphurDioxide: number;
  shadow: string;
}

const AirPollutionCardComponent: FC<Props> = ({
  status,
  aqi,
  carbonMonoxide,
  ozone,
  nitrogenDioxide,
  sulphurDioxide,
  shadow,
}) => (
  <Card title='Air Pollution' shadow={shadow}>
    {aqi === 1 && <GreenFace className={styles.icon} />}
    {aqi === 2 && <YellowFace className={styles.icon} />}
    {aqi === 3 && <OrangeFace className={styles.icon} />}
    {aqi === 4 && <RedFace className={styles.icon} />}
    {aqi === 5 && <PurpleFace className={styles.icon} />}
    {aqi === 6 && <MaroonFace className={styles.icon} />}
    {!aqi && <LoadingIcon className={styles.icon} />}
    <p className={styles.status}>{status}</p>
    <div className={styles.aditionalInfoContainer}>
      <p className={styles.aditionalInfo}>
        {`Carbon Monoxide: ${carbonMonoxide}`}
      </p>
      <p className={styles.aditionalInfo}>{`Ozone: ${ozone}`}</p>
      <p className={styles.aditionalInfo}>
        {`Nitrogen dioxide: ${nitrogenDioxide}`}
      </p>
      <p className={styles.aditionalInfo}>
        {`Sulphur dioxide: ${sulphurDioxide}`}
      </p>
    </div>
  </Card>
);
export { AirPollutionCardComponent };
