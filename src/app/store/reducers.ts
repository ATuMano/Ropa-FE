import { appLoadedReducer } from "features/loading/loading-reducer";
import { configurationReducer } from "features/configuration/reducers/configuration-reducer";
import { genderReducer } from "features/gender/gender-reducer";
import { filtersReducer } from "features/filters/reducers/filter-reducer";
import { productReducer } from "features/products/products-reducer";
import { categoryReducer } from "features/category/category-reducer";
import { combineReducers } from "redux";
import { selectedStoreReducer } from "features/selected-store/reducers/selected-store-reducer";
import { paymentDataReducer } from "features/payment/payment-reducer";
import { shoppingCartReducer } from "features/shopping-cart/shopping-cart-reducer";

const reducers = combineReducers({
  isAppLoaded: appLoadedReducer,
  configuration: configurationReducer,
  selectedCategory: categoryReducer,
  filtersTrip: filtersReducer,
  selectedProduct: productReducer,
  selectedGender: genderReducer,
  selectedStoreId: selectedStoreReducer,
  paymentData: paymentDataReducer,
  shoppingCart: shoppingCartReducer
});

export default reducers;
