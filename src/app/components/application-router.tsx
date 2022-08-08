import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <h1>Bienvenido a Ropa a tu Mano</h1>
      </Route>
    </BrowserRouter>
  );
};
