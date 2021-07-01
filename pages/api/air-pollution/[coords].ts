import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { airPollutionInfo } from '@models/api';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const coords = req.query.coords as string;
  
  const response = await fetch(
    `https://api.waqi.info/feed/geo:${coords}/?token=${process.env.NEXT_PUBLIC_AIR_QUALITY_TOKEN}`,
  );

  const { data }: airPollutionInfo = await response.json();

  res.status(200).json(data);
});

export default handler;
