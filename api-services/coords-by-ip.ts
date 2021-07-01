import { ApiCall, Coords } from '@models/client';
import axios from 'axios';

const fetchUserCoords = async (): Promise<Coords> => {
  const { data } = (await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user-coords`,
  )) as ApiCall<Coords>;

  return data;
};

export { fetchUserCoords };
