import { ConfigModel } from "features/configuration/configuration-types";
import { getTheme } from "./global-styles";
import { UseAppReturnModel } from "./types.d";

export const useGlobalStyle = (configuration: ConfigModel) => {
  let theme: any = {};
  if (configuration.theme) {
    theme = getTheme(configuration);
  }
  return { theme };
};

export const useApp = (configuration: ConfigModel): UseAppReturnModel => {
  const { theme } = useGlobalStyle(configuration);

  return theme;
};
