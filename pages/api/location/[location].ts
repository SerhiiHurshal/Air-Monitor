import nc from 'next-connect';
import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';
import { MapboxPlaces } from '@models/api';
import { Place } from '@models/client';

const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const location = req.query.location as string;

  const {
    status,
    data: { features },
  } = await axios.get<MapboxPlaces>(
    `${baseURL}${location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  );

  const places: Place[] = features.map((feature) => ({
    id: feature.id,
    name: feature.place_name,
    center: {
      latitude: feature.center[1],
      longitude: feature.center[0],
    },
  }));

  res.status(status).json(places);
});

export default handler;
