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
