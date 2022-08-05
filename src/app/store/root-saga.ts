import { all, fork } from "redux-saga/effects";
import appInitSagas from "app/app-sagas";
import configurationSagas from "features/configuration/sagas/configuration-sagas";
export default function* rootSaga() {
  yield all([fork(appInitSagas), fork(configurationSagas)]);
}
