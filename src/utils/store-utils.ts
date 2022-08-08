import { compose } from "redux";

import { isTheSameEnvironmentVariable } from "./variable";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

export const shouldLogReduxEvents = (): boolean =>
  isTheSameEnvironmentVariable(process.env.REACT_APP_LOGGER, "LOGGER");

export const composeEnhancer: Function =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
