import { appLoadedReducer } from "features/loading/loading-reducer";
import { configurationReducer } from "features/configuration/reducers/configuration-reducer";
import { genderReducer } from "features/gender/gender-reducer";
import { filtersReducer } from "features/filters/reducers/filter-reducer";
import { combineReducers } from "redux";
import { selectedStoreReducer } from "features/selected-store/reducers/selected-store-reducer";

const reducers = combineReducers({
  isAppLoaded: appLoadedReducer,
  configuration: configurationReducer,
  selectedCategory: genderReducer,
  filtersTrip: filtersReducer,
  selectedStoreId: selectedStoreReducer
});

export default reducers;
