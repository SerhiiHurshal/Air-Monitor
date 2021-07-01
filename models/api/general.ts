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
  payload: airPollutionInfoData;
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

export interface airPollutionInfoData {
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
}
export interface airPollutionInfo {
  status: string;
  data: airPollutionInfoData;
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

export interface userCoordsResponse {
  ip: string;
  hostname: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  location: {
    geoname_id: number;
    capital: string;
    languages: [{ code: string; name: string; native: string }];
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;
  };
  time_zone: {
    id: string;
    current_time: string;
    gmt_offset: number;
    code: string;
    is_daylight_saving: boolean;
  };
  currency: {
    code: string;
    name: string;
    plural: string;
    symbol: string;
    symbol_native: string;
  };
  connection: { asn: number; isp: string };
  security: {
    is_proxy: boolean;
    proxy_type: any;
    is_crawler: boolean;
    crawler_name: any;
    crawler_type: any;
    is_tor: boolean;
    threat_level: string;
    threat_types: any;
  };
}
