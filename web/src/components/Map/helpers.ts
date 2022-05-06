import { FeatureCollection } from "geojson";
import { Measurement } from "../../../../lib/shared/types";
import mapboxgl from "mapbox-gl";

/**
 * @param measurements The measurements to be plotted on the map
 * @returns Geojson feature collection
 * @description Converts the measurements to geojson feature collection
 */
export const getFeatureCollection = (
  measurements: Measurement[]
): FeatureCollection => ({
  type: "FeatureCollection",
  features: measurements.map((m) => ({
    type: "Feature",
    properties: {
      description: `${m.temperature ? m.temperature : ""} \n ${m.city}`,
      icon: "circle",
    },
    geometry: {
      type: "Point",
      coordinates: [m.lon!, m.lat!],
    },
  })),
});

export const initialCenter: mapboxgl.LngLatLike = {
  lon: 24.945831,
  lat: 60.192059,
};

export const initialZoom: number = 6;

export const layout: mapboxgl.SymbolLayout = {
  "text-field": ["get", "description"],
  "text-size": 24,
  "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
  "text-variable-anchor": ["top", "bottom", "left", "right"],
  "text-radial-offset": 0.5,
  "text-justify": "auto",
  "icon-image": ["get", "icon"],
};
