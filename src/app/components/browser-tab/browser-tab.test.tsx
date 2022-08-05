import React from "react";
import { render } from "@testing-library/react";
import { BrowserTab } from "./browser-tab";
import { Store } from "redux";
import setStore from "app/store";
import { Provider } from "react-redux";

jest.mock(
  "features/language/hooks/use-translate",

  () => () => (_key: string) => "SomeTitle"
);

describe("browser tab must: ", () => {
  let store: Store;

  beforeEach(() => {
    store = setStore();
  });

  it("renders without crashing", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserTab />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
