import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { Product, ShoppingCart } from "./shopping-cart.types";
import { ADD_PRODUCT } from "./shopping-cart-actions";

const shoppingCartHandler: Mapping<Function> = {
  [ADD_PRODUCT]: (state: ShoppingCart, action: ActionStandard<Product>) => ({
    products: [...state.products, action.payload]
  })
};

export const shoppingCartReducer = (
  state: ShoppingCart = { products: [] },
  action: ActionStandard<string>
) => {
  return handle(state, action, shoppingCartHandler);
};
