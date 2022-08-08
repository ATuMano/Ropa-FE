import { createActionTypeRunner } from "utils/actions-utils";

const LANGUAGE_NAMESPACE = "CURRENT_LANGUAGE";

export const LANGUAGE_FEATURE = createActionTypeRunner(LANGUAGE_NAMESPACE);
