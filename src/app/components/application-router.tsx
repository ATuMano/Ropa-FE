import Landing from "app/pages/Landing/landing";
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
import ForgotPassword from "app/pages/ForgotPassword/forgot-password";
import Payment from "./payment/payment";
import ReviewOrder from "./review-order/review-order";
import PurchaseConfirmation from "./purchase-confirmation/purchase-confirmation";

// TO DO map route should be removed from application router

export const ApplicationRouter = () => {
  const addLayout = (page: any) => <Layout>{page}</Layout>;
  const addLayoutWithSecurity = (page: any) => (
    <AuthRoute>{addLayout(page)}</AuthRoute>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={addLayout(<Landing />)} />
        <Route path="/genders" element={addLayout(<Genders />)} />
        <Route path="/categories" element={addLayout(<Categories />)} />
        <Route path="/products" element={addLayout(<Products />)} />
        <Route
          path="/product/:productId"
          element={addLayout(<ProductDetail />)}
        />
        <Route path="/payment" element={addLayout(<Payment />)} />
        <Route path="/map" element={addLayoutWithSecurity(<StoreMap />)} />
        <Route path="/review" element={addLayout(<ReviewOrder />)} />
        <Route
          path="/purchase-confirmation"
          element={addLayout(<PurchaseConfirmation />)}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
