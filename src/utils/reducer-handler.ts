import { Action } from "redux";

import { Mapping } from "./types";

export const handle = <S>(
  state: S,
  action: Action,
  map: Mapping<Function>
): S => {
  const handler = map[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
