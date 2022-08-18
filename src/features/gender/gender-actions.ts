import { ActionStandard } from "app/store/types";

export const SELECTED_GENDER_ACTION = "SET_SELECTED_GENDER";

export const setSelectedGender = (payload: string): ActionStandard<string> => ({
  type: SELECTED_GENDER_ACTION,
  payload
});
