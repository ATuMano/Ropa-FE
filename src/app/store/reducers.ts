import { appLoadedReducer } from "features/loading/loading-reducer";
import { configurationReducer } from "features/configuration/reducers/configuration-reducer";
import { genderReducer } from "features/gender/gender-reducer";
import { filtersReducer } from "features/filters/reducers/filter-reducer";
import { productReducer } from "features/products/products-reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  isAppLoaded: appLoadedReducer,
  configuration: configurationReducer,
  selectedCategory: genderReducer,
  filtersTrip: filtersReducer,
  selectedProduct: productReducer,
});

export default reducers;
