import { appLoadedReducer } from "features/loading/loading-reducer";
import { configurationReducer } from "features/configuration/reducers/configuration-reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  isAppLoaded: appLoadedReducer,
  configuration: configurationReducer
});

export default reducers;
