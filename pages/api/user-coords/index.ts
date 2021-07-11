import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { userCoordsResponse } from '@models/api';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',').shift() ||
    req.socket.remoteAddress ||
    req.headers['x-real-ip'];

  console.log(ip);

  const response = await fetch(
    `http://api.ipstack.com/${ip}?access_key=${process.env.NEXT_PUBLIC_APISTACK_TOKEN}`,
  );

  console.log(response);

  const { latitude, longitude }: userCoordsResponse = await response.json();

  console.log(latitude, longitude);

  res.status(200).json({ latitude, longitude });
});

export default handler;
