import { State } from '@redux/state';
import { useSelector } from 'react-redux';
import { WeatherCardComponent } from './weather-card.component';

const WeatherCard = () => {
  const {
    temp_c,
    pressure_mb,
    humidity,
    wind_degree,
    wind_kph,
    condition: { icon },
  } = useSelector((state: State) => state.general.weatherInfo?.current);

  // Convert kilometers per hour to meters per second
  const convertSpeed = (speed: number | undefined): number => {
    if (!speed) return 0;
    return Number((speed / 3.6).toFixed(1));
  };

  const props = {
    temp_c,
    pressure_mb,
    humidity,
    windSpeed: convertSpeed(wind_kph),
    wind_degree,
    icon,
  };

  return <WeatherCardComponent {...props} />;
};

export { WeatherCard };
