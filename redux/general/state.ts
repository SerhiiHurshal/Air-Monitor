import { Place, WeatherInfo } from '@models/client';

/**
 * General state
 */
class GeneralState {
  /**
   * Current place
   */
  public selectedPlace: Place | null = null;

  /**
   * Avaliable places
   */
  public avaliablePlaces: Place[] = [];

  /**
   * Weather info
   */
  public weatherInfo: WeatherInfo = {
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
      air_quality: {
        co: 0,
        no2: 0,
        o3: 0,
        so2: 0,
        pm2_5: 0,
        pm10: 0,
        'us-epa-index': 0,
        'gb-defra-index': 0,
      },
    },
  };

  /**
   * Error
   */
  public error: string = '';
}

export { GeneralState };
