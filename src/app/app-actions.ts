import { Action } from "redux";
export const INIT_APP: string = "INIT_APP";

export const initApp = (): Action => ({
  type: INIT_APP
});
