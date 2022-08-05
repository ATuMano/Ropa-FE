import { createActionTypeRunner } from "utils/actions-utils";

const CONFIG_NAMESPACE = "config";

export const CONFIG_FEATURE = createActionTypeRunner(CONFIG_NAMESPACE);
