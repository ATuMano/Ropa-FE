import {
  setCurrentLanguageSuccess,
  setCurrentLanguageError,
  setCurrentLanguageInit
} from "./language-actions";
import { LANGUAGE_FEATURE } from "./language-action-types";

describe("language actions", () => {
  it("should init the language feature for the app", () => {
    expect(setCurrentLanguageInit()).toEqual({
      type: LANGUAGE_FEATURE.INIT
    });
  });

  it("should set the language index", () => {
    expect(setCurrentLanguageSuccess("en")).toEqual({
      type: LANGUAGE_FEATURE.SUCCESS,
      payload: "en"
    });
  });

  it("should display an error message when theres an issue loading the language", () => {
    expect(setCurrentLanguageError("error loading language")).toEqual({
      type: LANGUAGE_FEATURE.ERROR,
      payload: "error loading language"
    });
  });
});
