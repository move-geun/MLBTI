import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
// import store from './store/index'
import { Provider } from "react-redux";
import configStore from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

const { store, persistor } = configStore();

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
