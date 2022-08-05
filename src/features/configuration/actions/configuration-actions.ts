import { Action } from "redux";

import { ActionStandard } from "app/store/types";

import { ConfigModel } from "../configuration-types";
import { CONFIG_FEATURE } from "./configuration-action-types";

export const getConfigInit = (): Action => ({
  type: CONFIG_FEATURE.INIT
});

export const getConfigSuccess = (
  payload: ConfigModel
): ActionStandard<ConfigModel> => ({
  type: CONFIG_FEATURE.SUCCESS,
  payload
});

export const getConfigError = (
  payload: ConfigModel
): ActionStandard<ConfigModel> => ({
  type: CONFIG_FEATURE.ERROR,
  payload
});
