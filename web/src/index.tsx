import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { StoreProvider } from "easy-peasy";
import store from "./store";
import { ChakraProvider } from "@chakra-ui/react";

// https://github.com/ctrlplusb/easy-peasy/issues/741
const StoreProviderOverride = StoreProvider as any;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <StoreProviderOverride store={store}>
        <App />
      </StoreProviderOverride>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
