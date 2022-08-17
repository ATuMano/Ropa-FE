import Landing from "app/pages/landing/landing";
import Layout from "app/pages/Layout/layout";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Categories from "./categories/categories";
import ProductDetail from "./product-detail/product-details";

export const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/categories" exact>
          <Categories />
        </Route>
        <Route path="/product/:productId" exact>
          <ProductDetail />
        </Route>
      </Layout>
    </BrowserRouter>
  );
};
