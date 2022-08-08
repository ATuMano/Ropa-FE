import { ActionStandard } from "app/store/types";
import { handle } from "utils/reducer-handler";
import { Mapping } from "utils/types";

import { LANGUAGE_FEATURE } from "./language-action-types";
import { CurrentLanguageActionTypes } from "./language-actions";

export const languageSuccessHandler = (
  _state: string,
  action: ActionStandard<string>
) => action.payload;

const currentLanguageStateHandlers: Mapping<Function> = {
  [LANGUAGE_FEATURE.SUCCESS]: languageSuccessHandler
};

const initialState: string = "";

export const currentLanguageReducer = (
  state = initialState,
  action: CurrentLanguageActionTypes
) => {
  return handle(state, action, currentLanguageStateHandlers);
};
