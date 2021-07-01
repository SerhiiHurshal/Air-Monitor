import { ApiCall, Place } from '@models/client';
import axios from 'axios';

const fetchPlaces = async (userInput: string): Promise<Place[]> => {
  const fetchData = {
    location: userInput,
  };

  const { data } = (await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/location`,
    fetchData,
  )) as ApiCall<Place[]>;

  return data;
};

export { fetchPlaces };
