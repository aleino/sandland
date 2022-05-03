import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import mapboxgl from "mapbox-gl";

import config from "../config";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const node = mapContainer.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: config.MAPBOX_ACCESS_TOKEN,
      style: "mapbox://styles/mapbox/light-v10",
      center: [24.945831, 60.192059],
      zoom: 9,
    });

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return (
    <>
      <Box w="100%" h="100%" ref={mapContainer} className="map-container" />
    </>
  );
};

export default Map;
