import React from "react";
import "./App.css";

import MainLayout from "./layouts/MainLayout";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Map />
      </MainLayout>
    </div>
  );
}

export default App;
