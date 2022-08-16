import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { SELECTED_CATEGORY_ACTION } from "./category-actions";

const categoryHandler: Mapping<Function> = {
  [SELECTED_CATEGORY_ACTION]: (
    _state: string,
    action: ActionStandard<string>
  ) => action.payload,
};

export const categoryReducer = (
  state: string = "",
  action: ActionStandard<string>
) => {
  return handle(state, action, categoryHandler);
};
