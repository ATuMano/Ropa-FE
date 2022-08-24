import { ActionStandard } from "app/store/types";

export const SELECTED_PRODUCT_ACTION = "SET_SELECTED_PRODUCT";

export const setSelectedProductId = (
  payload: string
): ActionStandard<string> => ({
  type: SELECTED_PRODUCT_ACTION,
  payload
});
