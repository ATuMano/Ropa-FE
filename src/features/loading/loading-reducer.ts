import { Action } from "redux";

import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";

import { APP_LOADED } from "./loading-action-types";

const appLoadedStateHandlers: Mapping<Function> = {
  [APP_LOADED]: (_state: boolean, _action: Action) => true
};

const initialState = false;

export const appLoadedReducer = (
  state: boolean = initialState,
  action: Action
) => {
  return handle(state, action, appLoadedStateHandlers);
};
