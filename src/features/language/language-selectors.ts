import { State } from "app/store/types";

export const selectCurrentLanguage = (state: State) => state.currentLanguage;

export const selectCurrentLanguageIsoCode = (state: State) =>
  selectCurrentLanguage(state).substring(0, 2);
