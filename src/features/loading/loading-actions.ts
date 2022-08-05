import { Action } from "redux";

import { APP_LOADED } from "./loading-action-types";

export const appLoaded = (): Action => ({
  type: APP_LOADED
});
