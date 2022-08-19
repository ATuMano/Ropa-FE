import { ActionStandard } from "app/store/types";
export const SET_SELECTED_STORE = "SET_SELECTED_STORE";

export const setSelectedStore = (
  payload: string | null
): ActionStandard<string | null> => ({
  type: SET_SELECTED_STORE,
  payload
});
