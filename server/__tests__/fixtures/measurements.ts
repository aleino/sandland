import { Measurement } from "../../../lib/shared/types";

export const measurements1: Measurement[] = [
  {
    city: "Berlin",
    lat: 52.52,
    lon: 13.405,
    temperature: 10,
  },
];

export const measurements2: Measurement[] = [
  {
    city: "London",
    lat: 51.507,
    lon: -0.127,
    temperature: 20,
  },
  {
    city: "Paris",
    lat: 48.856,
    lon: 2.35,
    temperature: 30,
  },
];

export const singleObject: Measurement = {
  city: "London",
  lat: 51.507,
  lon: -0.127,
  temperature: 20,
};

type WithoutCity = Omit<Measurement, "city">;

export const missingCity: WithoutCity[] = [
  {
    lat: 52.52,
    lon: 13.405,
    temperature: 10,
  },
];
