import React from "react";
import StickyFooter from "../../components/footer/footer";
import Header from "../../components/header/header";
import { LayoutContainer, MainContainer } from "./layout-styles";

const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
      <StickyFooter />
    </LayoutContainer>
  );
};

export default Layout;
