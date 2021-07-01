import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { weatherInfo } from '@models/api';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const coords = req.query.coords as string;

  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&q=${coords}&aqi=no`,
  );

  const data: weatherInfo = await response.json();

  res.status(200).json(data);
});

export default handler;
