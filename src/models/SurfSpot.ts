export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface SurfSpot {
  id: string;
  name: string;
  location: Coordinates;
  description?: string;
  idealConditions: {
    swellHeight: {
      min: number;
      max: number;
    };
    swellDirection: string[];
    windSpeed: {
      min: number;
      max: number;
    };
    windDirection: string[];
  };
}