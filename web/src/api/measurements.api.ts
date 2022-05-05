const BASE_URL = "http://localhost:5000";

const fetchAll = async () => {
  const response = await fetch(`${BASE_URL}/measurements`);
  return await response.json();
};

const measurements = {
  fetchAll,
};

export default measurements;
