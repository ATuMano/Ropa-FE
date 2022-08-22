import Landing from "app/pages/landing/landing";
import Layout from "app/pages/layout/layout";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Genders from "./genders/genders";
import Products from "./products/products";
import ProductDetail from "./product-detail/product-details";

export const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/genders" exact>
          <Genders />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/product/:productId" exact>
          <ProductDetail />
        </Route>
      </Layout>
    </BrowserRouter>
  );
};
