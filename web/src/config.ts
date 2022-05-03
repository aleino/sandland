const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
if (!accessToken) {
  throw new Error("Environment variable REACT_APP_MAPBOX_TOKEN is not set");
}

const config = {
  MAPBOX_ACCESS_TOKEN: accessToken,
};
export default config;
