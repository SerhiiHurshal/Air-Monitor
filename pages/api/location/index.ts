import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { mapboxPlaces } from '@models/api';
import { Place } from '@models/client';

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const { location } = data;

  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
      location,
    )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  );

  const { features }: mapboxPlaces = await response.clone().json();

  const places: Place[] = features.map((feature) => ({
    id: feature.id,
    name: feature.place_name,
    center: {
      latitude: feature.center[1],
      longitude: feature.center[0],
    },
  }));

  res.status(200).json(places);
});

export default handler;
