import { Action } from "redux";

import { ActionStandard } from "app/store/types";

import { LANGUAGE_FEATURE } from "./language-action-types";

export const setCurrentLanguageInit = (): Action => ({
  type: LANGUAGE_FEATURE.INIT
});

export const setCurrentLanguageSuccess = (
  payload: string
): ActionStandard<string> => ({
  type: LANGUAGE_FEATURE.SUCCESS,
  payload
});

export const setCurrentLanguageError = (
  payload: string
): ActionStandard<string> => ({
  type: LANGUAGE_FEATURE.ERROR,
  payload
});

export type CurrentLanguageActionTypes =
  | ActionStandard<number>
  | ActionStandard<string>;
