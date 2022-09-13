import { selectShoppingCart } from "features/shopping-cart/shopping-cart-selector";
import React from "react";
import { useSelector } from "react-redux";
import {
  ShoppingCardContainer,
  CartTitle,
  CartTable,
  ProductContainer,
  ProductTitle,
  ProductImage
} from "./shopping-cart-styled";

const ShoppingCart = () => {
  const { products, show } = useSelector(selectShoppingCart);

  return show ? (
    <ShoppingCardContainer>
      <CartTitle>Carrito</CartTitle>
      <CartTable>
        {products.map(product => (
          <ProductContainer>
            <ProductTitle>{product.name}</ProductTitle>
            <span>Precio: €{product.price}</span>
            <ProductImage src={product.photo1} />
          </ProductContainer>
        ))}
      </CartTable>
    </ShoppingCardContainer>
  ) : (
    <></>
  );
};

export default ShoppingCart;
