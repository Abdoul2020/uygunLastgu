import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
//redux toolkit connect
import { store } from './services/redux/store';
import { Provider } from 'react-redux';



ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
      </Provider>
  </Router>,
  document.getElementById("root")
);
