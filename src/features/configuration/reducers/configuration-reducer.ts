import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";

import { ConfigModel } from "../configuration-types";
import { CONFIG_FEATURE } from "../actions/configuration-action-types";
import configurationInitialState from "../configuration-initial-state";

const configurationStateHandlers: Mapping<Function> = {
  [CONFIG_FEATURE.SUCCESS]: (
    _state: ConfigModel,
    action: ActionStandard<ConfigModel>
  ) => action.payload
};

export const configurationReducer = (
  state: ConfigModel = configurationInitialState,
  action: ActionStandard<ConfigModel>
) => {
  return handle(state, action, configurationStateHandlers);
};
