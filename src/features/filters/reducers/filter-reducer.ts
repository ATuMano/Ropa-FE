import { ActionStandard } from "app/store/types";
import { FilterTripNames } from "app/constants";
import { handle } from "utils/reducer-handler";
import { Mapping } from "utils/types";
import {
  CLEAR_FILTERS,
  UPDATE_COUNTRY,
  UPDATE_START_DATE,
  UPDATE_END_DATE
} from "../actions/filter-action-types";
import { FilterTrip } from "../filters.types";

const initialFilter: FilterTrip = {
  country: "",
  start_trip: "",
  end_trip: ""
};

const filterHandler: Mapping<Function> = {
  [UPDATE_COUNTRY]: (state: FilterTrip, action: ActionStandard<string>) => ({
    ...state,
    [FilterTripNames.COUNTRY]: action.payload
  }),
  [UPDATE_START_DATE]: (state: FilterTrip, action: ActionStandard<string>) => ({
    ...state,
    [FilterTripNames.START_DATE]: action.payload
  }),
  [UPDATE_END_DATE]: (state: FilterTrip, action: ActionStandard<number>) => ({
    ...state,
    [FilterTripNames.END_DATE]: action.payload
  }),
  [CLEAR_FILTERS]: (_state: FilterTrip, _action: ActionStandard<FilterTrip>) =>
    initialFilter
};

export const filtersReducer = (
  state: FilterTrip = initialFilter,
  action: ActionStandard<FilterTrip | string>
) => {
  return handle(state, action, filterHandler);
};
