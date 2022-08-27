import { ActionStandard } from "app/store/types";

export const ADD_PRODUCT_ACTION = "ADD_PRODUCT";

export const setSelectedProductId = (
  payload: string
): ActionStandard<string> => ({
  type: ADD_PRODUCT_ACTION,
  payload
});
