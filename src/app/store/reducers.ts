import { appLoadedReducer } from "features/loading/loading-reducer";
import { configurationReducer } from "features/configuration/reducers/configuration-reducer";
import { genderReducer } from "features/gender/gender-reducer";
import { filtersReducer } from "features/filters/reducers/filter-reducer";
import { productReducer } from "features/products/products-reducer";
import { categoryReducer } from "features/category/category-reducer";
import { combineReducers } from "redux";
import { selectedStoreReducer } from "features/selected-store/reducers/selected-store-reducer";

const reducers = combineReducers({
  isAppLoaded: appLoadedReducer,
  configuration: configurationReducer,
  selectedCategory: categoryReducer,
  filtersTrip: filtersReducer,
  productsInChart: productReducer,
  selectedGender: genderReducer,
  selectedStoreId: selectedStoreReducer
});

export default reducers;
