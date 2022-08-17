import React from "react";
import { renderWithProviders } from "utils/test-utils";
import Landing from "./landing";

describe("Landing tests", () => {
  const renderLanding = () => renderWithProviders(<Landing />);

  it("should match snapshot", () => {
    const { asFragment } = renderLanding();
    expect(asFragment()).toMatchSnapshot();
  });
});
