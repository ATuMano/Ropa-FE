import { ActionStandard } from "app/store/types";
import {
  CLEAR_FILTERS,
  UPDATE_COUNTRY,
  UPDATE_START_DATE,
  UPDATE_END_DATE
} from "./filter-action-types";

export const updateCountryFilter = (
  payload: string
): ActionStandard<string> => ({
  type: UPDATE_COUNTRY,
  payload
});

export const updateStartDateTripFilter = (
  payload: string
): ActionStandard<string> => ({
  type: UPDATE_START_DATE,
  payload
});

export const updateEndDateTripFilter = (
  payload: string
): ActionStandard<string> => ({
  type: UPDATE_END_DATE,
  payload
});

export const clearFilters = (): ActionStandard<string> => ({
  type: CLEAR_FILTERS
});
