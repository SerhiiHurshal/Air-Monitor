import { Card } from '@components/card/card';
import LoadingIcon from '@images/loading.svg';

import styles from './weather-card.module.scss';

interface Props {
  temp_c: number;
  pressure_mb: number;
  humidity: number;
  windSpeed: number;
  wind_degree: number;
  icon: string;
}

const WeatherCardComponent = ({
  temp_c,
  pressure_mb,
  humidity,
  windSpeed,
  wind_degree,
  icon,
}: Props) => (
  <Card title='Weather'>
    {icon ? <img src={icon} className={styles.icon} /> : <LoadingIcon />}
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

export { WeatherCardComponent };
