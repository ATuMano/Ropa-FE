import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { Product, ShoppingCart } from "./shopping-cart.types";
import { ADD_PRODUCT, TOGGLE_SHOW_CART } from "./shopping-cart-actions";

const shoppingCartHandler: Mapping<Function> = {
  [ADD_PRODUCT]: (state: ShoppingCart, action: ActionStandard<Product>) => ({
    ...state,
    products: [...state.products, action.payload]
  }),
  [TOGGLE_SHOW_CART]: (state: ShoppingCart) => ({
    ...state,
    show: !state.show
  })
};

export const shoppingCartReducer = (
  state: ShoppingCart = { products: [], show: false },
  action: ActionStandard<string>
) => {
  return handle(state, action, shoppingCartHandler);
};
