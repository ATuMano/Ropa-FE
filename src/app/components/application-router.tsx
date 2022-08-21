import Landing from "app/pages/landing/landing";
import Layout from "app/pages/Layout/layout";
import Login from "app/pages/login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoute } from "./auth-route";
import Genders from "./genders/genders";
import ProductDetail from "./product-detail/product-details";

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

          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
