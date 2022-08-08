import { languageSuccessHandler } from "./language-reducer";

describe("language reducer", () => {
  it("languageSuccessHandler should receive state and action, and return action.payload", () => {
    const state = "en";
    const action = { type: "", payload: "es" };

    expect(languageSuccessHandler(state, action)).toEqual(action.payload);
  });
});
