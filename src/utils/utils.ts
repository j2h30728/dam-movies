/* eslint-disable @typescript-eslint/no-explicit-any */
type Func<T, R> = (arg: T) => R;

export const go = <T, R>(initialValue: T, ...fns: Func<any, any>[]): R =>
  fns.reduce((acc, fn) => fn(acc), initialValue as any);

export const pipe =
  <T, R>(...fns: Func<any, any>[]) =>
  (initialValue: T): R =>
    fns.reduce((acc, fn) => fn(acc), initialValue as any);
