export interface mapboxFeature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: { [property: string]: string };
  text: string;
  place_name: string;
  bbox: [number, number, number, number];
  center: [number, number];
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

export interface place {
  id: string;
  name: string;
  center: [number, number];
}
