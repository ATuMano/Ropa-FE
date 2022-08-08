import React from "react";
import App from "./App";
import { renderWithProviders } from "utils/test-utils";

describe("Input Component", () => {
  it("should render app component", () => {
    renderWithProviders(<App />);
  });
});
