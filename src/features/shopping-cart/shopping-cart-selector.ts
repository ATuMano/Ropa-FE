import { State } from "app/store/types";
import { ShoppingCart } from "./shopping-cart.types";

export const selectShoppingCart = (state: State): ShoppingCart =>
  state.shoppingCart;
