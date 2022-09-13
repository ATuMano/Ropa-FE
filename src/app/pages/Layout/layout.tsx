import React from "react";
import StickyFooter from "../../components/footer/footer";
import Header from "../../components/header/header";
import { LayoutContainer, MainContainer } from "./layout-styles";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";

const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>
        <ShoppingCart />
        {children}
      </MainContainer>
      <StickyFooter />
    </LayoutContainer>
  );
};

export default Layout;
