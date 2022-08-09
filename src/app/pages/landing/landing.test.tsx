import { render } from "@testing-library/react";
import React from "react";
import Landing from "./landing";

describe("Landing tests", () => {
  const renderLanding = () => render(<Landing />);

  it("should match snapshot", () => {
    const { asFragment } = renderLanding();
    expect(asFragment()).toMatchSnapshot();
  });
});
