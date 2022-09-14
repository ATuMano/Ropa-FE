import { useNavigate } from "react-router-dom";
import { selectShoppingCart } from "features/shopping-cart/shopping-cart-selector";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MainButton } from "styles";
import {
  ShoppingCardContainer,
  CartTitle,
  CartTable,
  ProductContainer,
  ProductTitle,
  ProductImage
} from "./shopping-cart-styled";
import { toggleShowCart } from "features/shopping-cart/shopping-cart-actions";

const ShoppingCart = () => {
  const { products, show } = useSelector(selectShoppingCart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(toggleShowCart());
    navigate("/map");
  };

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

      <MainButton onClick={handleOnClick}>COMPRAR</MainButton>
    </ShoppingCardContainer>
  ) : (
    <></>
  );
};

export default ShoppingCart;
