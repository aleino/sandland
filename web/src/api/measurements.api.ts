import { Measurement } from "../../../lib/shared/types";
import config from "../config";

const BASE_URL = config.API_BASE_URL;

const fetchAll = async () => {
  const response = await fetch(`${BASE_URL}/measurements`);
  return await response.json();
};

const uploadCollection = async (measurements: Measurement[]) => {
  const response = await fetch(`${BASE_URL}/measurements`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(measurements),
  });
  // Error handling
  if (response.status === 500) {
    throw new Error("Server Error");
  } else if (response.status === 422) {
    throw new Error("Unprocessable Entity");
  } else if (response.status !== 201) {
    throw new Error("Upload Error");
  }
  return response.json();
};

const measurements = {
  fetchAll,
  uploadCollection,
};

export default measurements;
