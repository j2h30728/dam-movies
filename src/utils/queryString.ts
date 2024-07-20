/* eslint-disable @typescript-eslint/no-explicit-any */
export const curry =
  <A, R>(f: (...args: A[]) => R) =>
  (a: A, ...rest: A[]): any =>
    rest.length ? f(a, ...rest) : (...rest: A[]): R => f(a, ...rest);

export const buildQueryString = (queryObj: Record<string, any>): string => {
  const encodeValue = (key: string, value: any): string => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

  const serializeParams = (queryObj: Record<string, any>) =>
    Object.entries(queryObj)
      .map(([key, value]) => encodeValue(key, value))
      .join("&");

  return Object.keys(queryObj).length > 0 ? `?${serializeParams(queryObj)}` : "";
};
