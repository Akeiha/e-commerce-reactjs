import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import store from "src/store/store";
import { Provider } from "react-redux";

import "src/styles/global.scss";
import "src/styles/reset.scss";

import App from "src/App.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
