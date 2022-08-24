import { render } from "@testing-library/react";
import React from "react";
import StickyFooter from "./footer";

describe("Footer tests", () => {
  const renderFooter = () => render(<StickyFooter />);

  it("should match snapshot", () => {
    const { asFragment } = renderFooter();
    expect(asFragment()).toMatchSnapshot();
  });
});
