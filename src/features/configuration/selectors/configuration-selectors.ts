import { State } from "app/store/types";

import { ConfigModel } from "../configuration-types";

export const selectConfiguration = (state: State): ConfigModel =>
  state.configuration;
