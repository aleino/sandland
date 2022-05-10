const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
if (!MAPBOX_ACCESS_TOKEN) {
  throw new Error("Environment variable REACT_APP_MAPBOX_TOKEN is not set");
}

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
if (!API_BASE_URL) {
  throw new Error("Environment variable REACT_APP_API_BASE_URL is not set");
}

const config = {
  MAPBOX_ACCESS_TOKEN,
  API_BASE_URL,
};
export default config;
