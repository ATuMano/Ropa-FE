import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { getURLKey } from "utils/route-utils";
import merge from "lodash/merge";

import { getConfigFileByURL } from "../configuration-collaborators";
import { getConfigSuccess } from "../actions/configuration-actions";
import { CONFIG_FEATURE } from "../actions/configuration-action-types";
import { ConfigModel } from "../configuration-types";
import configurationInitialState from "../configuration-initial-state";

export function* getConfig(): SagaIterator {
  try {
    const brandURL = getURLKey();
    const configuration: ConfigModel = yield call(getConfigFileByURL, brandURL);
    const partnerConfig = merge({}, configurationInitialState, configuration);
    yield put(getConfigSuccess(partnerConfig));
  } catch (error) {
    // TODO: Error handling
    console.log(error);
  }
}

export default function* main() {
  yield takeLatest(CONFIG_FEATURE.INIT, getConfig);
}
