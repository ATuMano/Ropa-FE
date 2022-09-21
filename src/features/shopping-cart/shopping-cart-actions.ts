import { ActionStandard } from "app/store/types";
import { Product } from "./shopping-cart.types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const EMPTY_CART = "EMPTY_CART";
export const TOGGLE_SHOW_CART = "TOGGLE_SHOW_CART";
export const INCREASE_PRODUCT = "INCREASE_PRODUCT";
export const DECREASE_PRODUCT = "DECREASE_PRODUCT";

export const addProduct = (payload: Product): ActionStandard<Product> => ({
  type: ADD_PRODUCT,
  payload
});

export const toggleShowCart = () => ({
  type: TOGGLE_SHOW_CART
});

export const emptyCart = () => ({
  type: EMPTY_CART
});

export const increaseProduct = (payload: Product): ActionStandard<Product> => ({
  type: INCREASE_PRODUCT,
  payload
});

export const decreaseProduct = (payload: Product): ActionStandard<Product> => ({
  type: DECREASE_PRODUCT,
  payload
});
