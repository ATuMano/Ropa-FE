import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { SET_SELECTED_STORE } from "../actions/selected-store-actions";

const selectedStoreHandler: Mapping<Function> = {
  [SET_SELECTED_STORE]: (_state: string, action: ActionStandard<string>) =>
    action.payload,
};

export const selectedStoreReducer = (
  state: string | null = null,
  action: ActionStandard<string>
) => {
  return handle(state, action, selectedStoreHandler);
};
