import Landing from "app/pages/landing/landing";
import Layout from "app/pages/Layout/layout";
import Login from "app/pages/Login/login";
import Register from "app/pages/Register/register";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoute } from "./auth-route";
import Categories from "./categories/categories";
import Genders from "./genders/genders";
import Products from "./products/products";
import ProductDetail from "./product-detail/product-details";
import StoreMap from "./store-map/store-map";

// TO DO map route should be removed from application router

export const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Landing />
              </AuthRoute>
            }
          />
          <Route
            path="/genders"
            element={
              <AuthRoute>
                <Genders />
              </AuthRoute>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <AuthRoute>
                <ProductDetail />
              </AuthRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <AuthRoute>
                <Categories />
              </AuthRoute>
            }
          />
          <Route
            path="/products"
            element={
              <AuthRoute>
                <Products />
              </AuthRoute>
            }
          />
          <Route
            path="/map"
            element={
              <AuthRoute>
                <StoreMap />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
