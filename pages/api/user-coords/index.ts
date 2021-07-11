import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { userCoordsResponse } from '@models/api';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const response = await fetch(
    `http://api.ipstack.com/${ip}?access_key=${process.env.NEXT_PUBLIC_APISTACK_TOKEN}`,
  );

  const { latitude, longitude }: userCoordsResponse = await response.json();

  res.status(200).json({ latitude, longitude });
});

export default handler;
