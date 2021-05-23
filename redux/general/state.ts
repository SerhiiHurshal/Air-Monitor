import { airPollutionInfoData, place, weatherInfo } from 'types';

/**
 * General state
 */
class GeneralState {
  /**
   * Current place
   */
  public selectedPlace: place | null = null;

  /**
   * Avaliable places
   */
  public avaliablePlaces: place[] = [];

  /**
   * Air pollution info
   */
  public airPollutionInfo: airPollutionInfoData = {
    idx: 0,
    aqi: 0,
    time: {
      v: 0,
      s: 'loading...',
      tz: 'loading...',
    },
    city: {
      name: 'loading...',
      url: 'loading...',
      geo: ['0', '0'], // latitude, longitude
    },
    iaqi: {
      pm25: {
        v: 0,
      },
    },
    forecast: {
      daily: {
        pm25: [
          {
            avg: 0,
            day: 'loading...',
            max: 0,
            min: 0,
          },
          {
            avg: 0,
            day: 'loading...',
            max: 0,
            min: 0,
          },
        ],
      },
    },
  };

  /**
   * Weather info
   */
  public weatherInfo: weatherInfo = {
    location: {
      name: 'loading...',
      region: 'loading...',
      country: 'loading...',
      lat: 0,
      lon: 0,
      tz_id: 'loading...',
      localtime_epoch: 0,
      localtime: 'loading...',
    },
    current: {
      last_updated_epoch: 0,
      last_updated: 'loading...',
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: 'loading...',
        icon: '',
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: 'loading...',
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      vis_km: 0,
      vis_miles: 0,
      uv: 0,
      gust_mph: 0,
      gust_kph: 0,
    },
  };
}

export { GeneralState };
