export interface mapboxFeature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: { [property: string]: string };
  text: string;
  place_name: string;
  bbox: [number, number, number, number];
  center: [number, number]; // longitude, latitude
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  context: {
    id: string;
    wikidata: string;
    text: string;
    short_code?: string;
  }[];
}
export interface mapboxPlaces {
  type: string;
  query: string[];
  features: mapboxFeature[];
  attribution: string;
}

export interface Place {
  id: string;
  name: string;
  center: Coords;
}

export interface Coords {
  latitude: number;
  longitude: number;
}

export interface ApiCall<Data> {
  status: number;
  data: Data;
}

export interface WeatherInfo {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

export interface AirPollutionInfo {
  aqi: number;
  city: {
    name: string;
    url: string;
    geo: [string, string]; // latitude, longitude
  };
  forecast: {
    daily: {
      pm25: [
        {
          avg: number;
          day: string;
          max: number;
          min: number;
        },
        {
          avg: number;
          day: string;
          max: number;
          min: number;
        },
      ];
    };
  };
  iaqi: {
    pm25: {
      v: number;
    };
  };
  idx: number;
  time: {
    v: number;
    s: string;
    tz: string;
  };
}

export type Theme = 'light' | 'dark';
