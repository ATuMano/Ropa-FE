import { State } from "app/store/types";

export const selectSelectedStore = (state: State): string =>
  state.selectedStoreId;
