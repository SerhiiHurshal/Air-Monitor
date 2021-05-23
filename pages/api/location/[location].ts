import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { mapboxPlaces } from 'types';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { location } = req.query;

  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  );

  const { features }: mapboxPlaces = await response.clone().json();

  res.status(200).json(features);
});

export default handler;
