import nc from 'next-connect';
import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';
import { WeatherInfo } from '@models/api';

const baseURL = 'https://api.weatherapi.com/v1/current.json';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const coords = req.query.coords as string;

    const { status, data } = await axios.get<WeatherInfo>(
      `${baseURL}?key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&q=${coords}&aqi=yes`,
    );

    res.status(status).json(data);
  } catch (error) {
    console.log(error);
  }
});

export default handler;
