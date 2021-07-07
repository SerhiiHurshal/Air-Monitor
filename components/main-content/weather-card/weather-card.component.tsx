import { Card } from '@components/card/card';
import { FC } from 'react';

import styles from './weather-card.module.scss';

import {
  IconNumber,
  Time,
  WeatherIcons,
} from '@components/weather-icons/weather-icons';

interface Props {
  temp_c: number;
  pressure_mb: number;
  humidity: number;
  windSpeed: number;
  wind_degree: number;
  imageParametrs: {
    time: Time;
    number: IconNumber;
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
  const WeatherIcon = WeatherIcons[imageParametrs.time][imageParametrs.number];

  return (
    <Card title='Weather'>
      <WeatherIcon className={styles.icon} />
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
