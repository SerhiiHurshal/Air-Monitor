import { ApiCall, Coords, WeatherInfo } from '@models/client';
import axios from 'axios';

const fetchWeatherInfo = async (coords: Coords): Promise<WeatherInfo> => {
  const { data } = (await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/weather/${coords.latitude},${coords.longitude}`,
  )) as ApiCall<WeatherInfo>;

  return data;
};

export { fetchWeatherInfo };
