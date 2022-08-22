import { State } from "app/store/types";

export const selectSelectedProductId = (state: State) =>
  state.selectedProductId;
