import { ActionStandard } from "app/store/types";
import { Mapping } from "utils/types";
import { handle } from "utils/reducer-handler";
import { Product, ShoppingCart } from "./shopping-cart.types";
import {
  ADD_PRODUCT,
  TOGGLE_SHOW_CART,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  EMPTY_CART
} from "./shopping-cart-actions";

const shoppingCartHandler: Mapping<Function> = {
  [ADD_PRODUCT]: (state: ShoppingCart, action: ActionStandard<Product>) => {
    const products = [...state.products];
    let productExists = false;
    const newProducts = products.map(product => {
      const newProduct = { ...product };
      if (
        action.payload?.id == newProduct.id &&
        action.payload.size == newProduct.size
      ) {
        newProduct.quantity++;
        productExists = true;
      }
      return newProduct;
    });

    if (!productExists && action.payload) {
      newProducts.push({ ...action.payload });
    }

    return {
      ...state,
      products: newProducts
    };
  },
  [TOGGLE_SHOW_CART]: (state: ShoppingCart) => ({
    ...state,
    show: !state.show
  }),
  [INCREASE_PRODUCT]: (
    state: ShoppingCart,
    action: ActionStandard<Product>
  ) => {
    const products = [...state.products];
    const newProducts = products.map(product => {
      const newProduct = { ...product };
      if (
        action.payload?.id == newProduct.id &&
        action.payload.size == newProduct.size
      ) {
        newProduct.quantity++;
      }
      return newProduct;
    });

    return {
      ...state,
      products: newProducts
    };
  },
  [DECREASE_PRODUCT]: (
    state: ShoppingCart,
    action: ActionStandard<Product>
  ) => {
    const products = [...state.products];
    const newProducts = products
      .map(product => {
        const newProduct = { ...product };
        if (
          action.payload?.id == newProduct.id &&
          action.payload.size == newProduct.size
        ) {
          newProduct.quantity--;
        }

        return newProduct.quantity ? newProduct : null;
      })
      .filter(p => !!p);

    return {
      ...state,
      products: newProducts
    };
  },
  [EMPTY_CART]: (state: ShoppingCart) => ({
    products: [],
    show: state.show
  })
};

export const shoppingCartReducer = (
  state: ShoppingCart = { products: [], show: false },
  action: ActionStandard<string>
) => {
  return handle(state, action, shoppingCartHandler);
};
