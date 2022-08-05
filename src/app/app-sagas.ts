import { SagaIterator } from "redux-saga";
import { put, takeLatest, take } from "redux-saga/effects";
import { appLoaded } from "../features/loading/loading-actions";
import { INIT_APP } from "./app-actions";
import { getConfigInit } from "features/configuration/actions/configuration-actions";
import { CONFIG_FEATURE } from "features/configuration/actions/configuration-action-types";

export function* initializeApp(): SagaIterator {
  yield put(getConfigInit());
  yield take(CONFIG_FEATURE.SUCCESS);
  yield put(appLoaded());
}

export default function* main() {
  yield takeLatest(INIT_APP, initializeApp);
}
