import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import setStore from "app/store";
import { persistState } from "utils/persisted-state";
import { Provider } from "react-redux";

const store = setStore();

store.subscribe(() => {
  persistState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
