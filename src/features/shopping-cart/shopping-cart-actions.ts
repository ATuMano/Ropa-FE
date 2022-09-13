import { ActionStandard } from "app/store/types";
import { Product } from "./shopping-cart.types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const TOGGLE_SHOW_CART = "TOGGLE_SHOW_CART";

export const addProduct = (payload: Product): ActionStandard<Product> => ({
  type: ADD_PRODUCT,
  payload
});

export const toggleShowCart = () => ({
  type: TOGGLE_SHOW_CART
});
