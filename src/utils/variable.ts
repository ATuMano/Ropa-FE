export const isTheSameEnvironmentVariable = (
  environmentVariable?: string,
  comparator?: string
): boolean =>
  JSON.stringify(environmentVariable) === JSON.stringify(comparator);

export const isTestEnvironment = (): boolean =>
  isTheSameEnvironmentVariable(process.env.REACT_APP_ENVIRONMENT, "ppa");
