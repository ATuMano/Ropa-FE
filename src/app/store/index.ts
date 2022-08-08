import { createStore, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { shouldLogReduxEvents, composeEnhancer } from "utils/store-utils";
import rootReducer from "./reducers";
import rootSagas from "./root-saga";
import { getPersistedState } from "utils/persisted-state";

const sagaMiddleware = createSagaMiddleware();

const setMiddlewareList = () => {
  const middlewareList: Middleware[] = [sagaMiddleware];
  if (shouldLogReduxEvents()) {
    middlewareList.push(logger);
  }
  return applyMiddleware(...middlewareList);
};

const persistedState = getPersistedState();

const setStore = () => {
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancer(setMiddlewareList())
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

export default setStore;
