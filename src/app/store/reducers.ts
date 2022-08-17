import { appLoadedReducer } from "features/loading/loading-reducer";
import { configurationReducer } from "features/configuration/reducers/configuration-reducer";
import { categoryReducer } from "features/category/category-reducer";
import { filtersReducer } from "features/filters/reducers/filter-reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  isAppLoaded: appLoadedReducer,
  configuration: configurationReducer,
  selectedCategory: categoryReducer,
  filtersTrip: filtersReducer
});

export default reducers;
