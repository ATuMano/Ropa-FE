import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { SELECTED_PRODUCT_ACTION } from "./products-actions";

const productHandler: Mapping<Function> = {
  [SELECTED_PRODUCT_ACTION]: (_state: string, action: ActionStandard<string>) =>
    action.payload
};

export const productReducer = (
  state: string = "",
  action: ActionStandard<string>
) => {
  return handle(state, action, productHandler);
};
