import { State } from '@redux/state';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    loadImage(icon);
  }, [icon]);

  const [imageParametrs, setImageParametrs] = useState<{
    time: string;
    number: string;
  }>({ time: 'day', number: '113' });

  const loadImage = (imageLink: string) => {
    const timeRegexp = imageLink.match(/64\/(.*)\//);

    if (!timeRegexp) return;

    const numberRegexp = imageLink.match(
      new RegExp(`${timeRegexp[1]}/(.*).png`),
    );

    if (!numberRegexp) return;

    const time = timeRegexp[1];

    const number = numberRegexp[1];

    const parametrs = {
      time: time,
      number: number,
    };

    setImageParametrs(parametrs);
  };

  const props = {
    temp_c,
    pressure_mb,
    humidity,
    windSpeed: convertSpeed(wind_kph),
    wind_degree,
    imageParametrs,
  };

  return <WeatherCardComponent {...props} />;
};

export { WeatherCard };
