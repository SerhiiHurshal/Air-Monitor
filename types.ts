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

export type getPlacesAction = {
  type: string;
  payload: string;
};

export type setPlacesAction = {
  type: string;
  payload: place[];
};

export type setSelectedPlaceAction = {
  type: string;
  payload: place;
};

export type setAirPollutionInfoAction = {
  type: string;
  payload: airPollutionInfo;
};

export type setWeatherInfoAction = {
  type: string;
  payload: weatherInfo;
};

export interface place {
  id: string;
  name: string;
  center: [number, number];
}

export interface airPollutionInfo {
  status: string;
  data: {
    idx: number;
    aqi: number;
    time: {
      v: number;
      s: string;
      tz: string;
    };
    city: {
      name: string;
      url: string;
      geo: [string, string]; // latitude, longitude
    };
    iaqi: {
      pm25: {
        v: number;
      };
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
  };
}

export interface weatherInfo {
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
