import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { ADD_PRODUCT_ACTION } from "./products-actions";

const productHandler: Mapping<Function> = {
  [ADD_PRODUCT_ACTION]: (
    state: string[],
    { payload }: ActionStandard<string>
  ) => [...state, payload]
};

export const productReducer = (
  state: string[] = [],
  action: ActionStandard<string>
) => {
  return handle(state, action, productHandler);
};
