import defaultTheme from "styles/default-theme";
import { ConfigModel } from "./configuration-types";

const configurationInitialState: ConfigModel = {
  partnerName: "Test",
  theme: { ...defaultTheme}
};

export default configurationInitialState;
