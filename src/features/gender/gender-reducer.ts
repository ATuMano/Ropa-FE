import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { SELECTED_GENDER_ACTION } from "./gender-actions";

const genderHandler: Mapping<Function> = {
  [SELECTED_GENDER_ACTION]: (_state: string, action: ActionStandard<string>) =>
    action.payload
};

export const genderReducer = (
  state: string = "",
  action: ActionStandard<string>
) => {
  return handle(state, action, genderHandler);
};
