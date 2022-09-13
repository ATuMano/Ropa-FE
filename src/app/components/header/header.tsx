import { Button } from "@material-ui/core";
import { toggleShowCart } from "features/shopping-cart/shopping-cart-actions";
import { selectShoppingCart } from "features/shopping-cart/shopping-cart-selector";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainButton } from "styles";
import LoginIcon from "../icons/login-icon";
import LogoIcon from "../icons/logo-icon";
import {
  HeaderContainer,
  MainText,
  PageBox,
  ShoppingCartIcon,
  ItemsCount
} from "./header-styles";

const Header = () => {
  const auth = getAuth();
  const [isAutheticated, setIsAutheticated] = useState(false);
  const { products } = useSelector(selectShoppingCart);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(toggleShowCart());
  };

  onAuthStateChanged(auth, user => {
    setIsAutheticated(!!user);
  });

  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <PageBox>
        <Button onClick={() => navigate("/")}>
          <LogoIcon />
        </Button>
        <MainText variant="h5">Ropa a tu mano</MainText>
      </PageBox>
      {isAutheticated ? (
        <Button onClick={() => signOut(auth)}>
          <LoginIcon />
        </Button>
      ) : (
        <MainButton onClick={() => navigate("/login")}>
          Iniciar sesion
        </MainButton>
      )}
      <ShoppingCartIcon onClick={toggleCart}>
        <ItemsCount>{products.length}</ItemsCount>
      </ShoppingCartIcon>
    </HeaderContainer>
  );
};

export default Header;
