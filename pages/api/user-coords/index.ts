import nc from 'next-connect';
import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Stages, UserCoordsResponse } from '@models/api';

const baseURL = 'https://api.ipgeolocation.io/ipgeo';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.NEXT_PUBLIC_STAGE === Stages.development) {
    res.status(200).json({ latitude: 51.5, longitude: 0.1 });
    return;
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',').shift() ||
    req.socket.remoteAddress ||
    req.headers['x-real-ip'];

  const {
    status,
    data: { latitude, longitude },
  } = await axios.get<UserCoordsResponse>(
    `${baseURL}?apiKey=${process.env.NEXT_PUBLIC_IPGEOLOCATION_TOKEN}&ip=${ip}`,
  );

  res.status(status).json({ latitude, longitude });
});

export default handler;
