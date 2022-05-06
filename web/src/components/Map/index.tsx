import React, { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";

import { useStoreState } from "../../store";
import { getMeasurementsWithUserPreferences } from "../../utils/measurements";
import {
  initialCenter,
  initialZoom,
  getFeatureCollection,
  layout,
} from "./helpers";

// With React Create App Mapbox does not build without this.
// https://github.com/mapbox/mapbox-gl-js/issues/10173
// prettier-ignore
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {
  // Get and modify data shown on the map
  const measurements = useStoreState((state) => state.measurements.data);
  const temperatureUnit = useStoreState(
    (state) => state.userPreferences.temperatureUnit
  );
  const measurementsWithUserPreferences = getMeasurementsWithUserPreferences(
    measurements,
    temperatureUnit
  );

  const featureCollection = getFeatureCollection(
    measurementsWithUserPreferences
  );

  const [ready, setReady] = useState(false);
  const mapContainer = React.useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Draw Initial Map
    if (map.current || !mapContainer.current) return;
    map.current = new mapboxgl.Map({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: initialCenter,
      zoom: initialZoom,
    });
    map.current.on("load", () => {
      setReady(true);
    });
  });

  // Draw measurement markers
  useEffect(() => {
    if (!map.current || !ready) return;

    const sourceName = "measurements";
    if (map.current.getSource(sourceName)) {
      (map.current.getSource(sourceName) as GeoJSONSource).setData(
        featureCollection
      );
      return;
    }

    map.current.addSource(sourceName, {
      type: "geojson",
      data: featureCollection,
    });
    map.current.addLayer({
      id: "measurement-labels",
      type: "symbol",
      source: sourceName,
      layout,
    });
  }, [ready, featureCollection, map]);

  return (
    <>
      <Box
        w="100%"
        h="100%"
        ref={mapContainer}
        id="map"
        className="map-container"
        bg="#cad2d3" // MapBox light-v10 style color
      />
    </>
  );
};

export default Map;
