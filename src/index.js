import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/dashboard-react.scss";

import { store } from "./redux/store";
import App from './App';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
