import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { store } from "./Store";
import store, { persistor } from "./Store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyles from "./global-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </Provider>
);
