import { Card } from '@components/card/card';
import { FC } from 'react';
import Image from 'next/image';

import styles from './weather-card.module.scss';

interface Props {
  temp_c: number;
  pressure_mb: number;
  humidity: number;
  windSpeed: number;
  wind_degree: number;
  imageParametrs: {
    time: string;
    number: string;
  };
}

const WeatherCardComponent: FC<Props> = ({
  temp_c,
  pressure_mb,
  humidity,
  windSpeed,
  wind_degree,
  imageParametrs,
}) => {
  return (
    <Card title='Weather'>
      <div className={styles.imageWrapper}>
        <Image
          src={`/images/weather-icons/${imageParametrs.time}/${imageParametrs.number}.svg`}
          layout='fill'
        />
      </div>
      <p className={styles.status}>{`${temp_c}°C`}</p>
      <div className={styles.aditionalInfoContainer}>
        <p className={styles.aditionalInfo}>{`Pressure: ${pressure_mb} hPa`}</p>
        <p className={styles.aditionalInfo}>{`Humidity: ${humidity}%`} </p>
        <p className={styles.aditionalInfo}>{`Wind speed: ${windSpeed} m/s`}</p>
        <p className={styles.aditionalInfo}>
          {`Wind direction: ${wind_degree}°`}
        </p>
      </div>
    </Card>
  );
};

export { WeatherCardComponent };
