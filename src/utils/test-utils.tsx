import React from "react";
import createSagaMiddleware, { runSaga } from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {
  render,
  cleanup,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { actionWatcherMiddleware, triggeredActions } from "./triggered-actions";
import rootReducer from "../app/store/reducers";
import sagas from "../app/store/root-saga";
import { State } from "app/store/types";
import defaultTheme from "styles/default-theme";
import { ThemeProvider } from "styled-components";

const initialState: Partial<State> = {
  configuration: {
    partnerName: "Test"
  },
  isAppLoaded: false
};

export const cleanUp = () => {
  cleanup();
  triggeredActions.clear();
};

export const getStore = (providedState = initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [actionWatcherMiddleware, sagaMiddleware];

  const createdStore = createStore(
    rootReducer,
    providedState,
    compose(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(sagas);
  return { store: createdStore };
};

export const renderWithProviders = (
  Component: JSX.Element,
  providedState?: Partial<State>
) => {
  const { store } = getStore(providedState);

  const rendered = render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Router>{Component}</Router>
      </ThemeProvider>
    </Provider>
  );
  return { ...rendered, store, screen };
};

export const findErrorByName = async (
  inputName: string
): Promise<HTMLElement> => {
  const find = () => screen.queryByTestId(`error-input-${inputName}`);

  await waitFor(() => !!find());

  return find()!;
};

export const waitForErrorRemovedByName = async (
  inputName: string
): Promise<void> => {
  const find = () => screen.queryByTestId(`error-input-${inputName}`);

  await waitForElementToBeRemoved(find);
};

export async function recordSaga(saga: any, initialAction: any) {
  const dispatched: any = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    initialAction
  ).result;

  return dispatched;
}
