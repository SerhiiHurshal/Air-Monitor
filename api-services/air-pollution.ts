import { ApiCall, Coords, AirPollutionInfo } from '@models/client';
import axios from 'axios';

const fetchAirPollutionInfo = async (
  coords: Coords,
): Promise<AirPollutionInfo> => {
  const { data } = (await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/air-pollution/${coords.latitude};${coords.longitude}`,
  )) as ApiCall<AirPollutionInfo>;

  return data;
};

export { fetchAirPollutionInfo };
