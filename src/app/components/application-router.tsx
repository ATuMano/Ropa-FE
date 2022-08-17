import Landing from "app/pages/landing/landing";
import Layout from "app/pages/Layout/layout";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Genders from "./genders/genders";

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
      </Layout>
    </BrowserRouter>
  );
};
