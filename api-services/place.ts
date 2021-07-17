import { ApiCall, Place } from '@models/client';
import axios from 'axios';

const fetchPlaces = async (userInput: string): Promise<Place[]> => {
  const { data } = (await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/location/${userInput}`,
  )) as ApiCall<Place[]>;

  return data;
};

export { fetchPlaces };
