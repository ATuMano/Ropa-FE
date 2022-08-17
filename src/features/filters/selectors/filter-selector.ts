import { State } from "app/store/types";
import { FilterTrip } from "../filters.types";

export const selectFiltersTrip = (state: State): FilterTrip =>
  state.filtersTrip;
