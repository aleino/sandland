import React from "react";
import { useStoreActions } from "./store";

import MainLayout from "./layouts/MainLayout";
import Map from "./components/Map";

import "./App.css";
function App() {
  const fetchMeasurements = useStoreActions(
    (actions) => actions.measurements.fetchAll
  );
  fetchMeasurements();
  return (
    <div className="App">
      <MainLayout>
        <Map />
      </MainLayout>
    </div>
  );
}

export default App;
