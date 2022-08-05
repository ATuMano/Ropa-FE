export const createActionTypeRunner = (actionType: string) => ({
  INIT: `${actionType}_INIT`,
  SUCCESS: `${actionType}_SUCCESS`,
  ERROR: `${actionType}_ERROR`
});
