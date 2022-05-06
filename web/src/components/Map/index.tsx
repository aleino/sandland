import React, { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import mapboxgl from "mapbox-gl";

import { useStoreState } from "../../store";
import {
  initialCenter,
  initialZoom,
  getFeatureCollection,
  layout,
} from "./helpers";

const Map = () => {
  const measurements = useStoreState((state) => state.measurements.data);
  const featureCollection = getFeatureCollection(measurements);

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
      map.current.removeSource(sourceName);
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
