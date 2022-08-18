interface Location {
  hostname: string;
  hash?: string;
  origin: string;
  search: string;
  href: string;
  replace(newLocation: string): void;
  assign(newLocation: string): void;
}

const getLocation = (): Location => window.location;

export const getURIOrigin = (): string => getLocation().origin;

export const assignToUrl = (newLocation: string): void => {
  getLocation().assign(newLocation);
};

export const getURLKey = (): string => {
  const { hostname } = getLocation();
  return hostname.split(".")[0];
};

export const useQueryParam = (history: any): URLSearchParams =>
  new URLSearchParams(history.location.search);

export const getQueryParam = (
  query: URLSearchParams,
  paramIdentifier: string
): string | undefined | null => {
  const result = query.get(paramIdentifier);
  switch (result) {
    case "undefined":
      return undefined;
    case "null":
      return null;
    default:
      return result;
  }
};
