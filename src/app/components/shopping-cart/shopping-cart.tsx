import { useNavigate } from "react-router-dom";
import { selectShoppingCart } from "features/shopping-cart/shopping-cart-selector";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MainButton } from "styles";
import {
  ShoppingCartContainer,
  CartTitle,
  CartTable,
  ProductContainer,
  ProductTitle,
  ProductImage,
  ProductDescriptionContainer,
  ButtonsContainer,
  CartButton,
  TotalPrice,
  ProductQuantity
} from "./shopping-cart-styled";
import {
  decreaseProduct,
  increaseProduct,
  toggleShowCart
} from "features/shopping-cart/shopping-cart-actions";
import { Product } from "features/shopping-cart/shopping-cart.types";

const ShoppingCart = () => {
  const { products, show } = useSelector(selectShoppingCart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(toggleShowCart());
    navigate("/map");
  };

  const handleIncrease = (product: Product) => {
    dispatch(increaseProduct(product));
  };

  const handleDecrease = (product: Product) => {
    dispatch(decreaseProduct(product));
  };

  return show ? (
    <ShoppingCartContainer>
      <CartTitle>Carrito</CartTitle>
      <CartTable>
        {products.map(product => (
          <>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductContainer>
              <ProductDescriptionContainer>
                <span>Talle: {product.size}</span>
                <span>
                  Precio: €{product.price}
                  <TotalPrice>
                    Total: €
                    {(Number(product.price) * product.quantity).toFixed(2)}
                  </TotalPrice>
                </span>
                <ButtonsContainer>
                  <CartButton onClick={() => handleIncrease(product)}>
                    +
                  </CartButton>
                  <ProductQuantity>{product.quantity}</ProductQuantity>
                  <CartButton onClick={() => handleDecrease(product)}>
                    -
                  </CartButton>
                </ButtonsContainer>
              </ProductDescriptionContainer>
              <ProductImage src={product.photo1} />
            </ProductContainer>
          </>
        ))}
      </CartTable>

      <MainButton onClick={handleOnClick}>COMPRAR</MainButton>
    </ShoppingCartContainer>
  ) : (
    <></>
  );
};

export default ShoppingCart;
