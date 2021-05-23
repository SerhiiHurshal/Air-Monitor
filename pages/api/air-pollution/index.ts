import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { airPollutionInfo } from 'types';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const ip =
    req.headers['x-real-ip'] || (req.connection.remoteAddress as string);

  const response = await fetch(
    `https://api.waqi.info/feed/here/?token=${process.env.NEXT_PUBLIC_AIR_QUALITY_TOKEN}`,
    {
      headers: {
        'X-Forwarded-For': `${ip}`,
        'x-real-ip': `${ip}`,
      },
    },
  );

  const data: airPollutionInfo = await response.json();

  res.status(200).json(data.data);
});

export default handler;
