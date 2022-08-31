import { ActionStandard } from "app/store/types";
import { Product } from "./shopping-cart.types";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const addProduct = (payload: Product): ActionStandard<Product> => ({
  type: ADD_PRODUCT,
  payload
});
