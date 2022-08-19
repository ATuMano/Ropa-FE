import { ActionStandard } from "app/store/types";

export const SELECTED_CATEGORY_ACTION = "SET_SELECTED_CATEGORY";

export const setSelectedCategory = (payload: string): ActionStandard<string> => ({
  type: SELECTED_CATEGORY_ACTION,
  payload
});
