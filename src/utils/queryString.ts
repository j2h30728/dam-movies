/* eslint-disable @typescript-eslint/no-explicit-any */

import { go } from "./utils";

export const parseQueryString = (search: string): Record<string, unknown> => {
  const params = new URLSearchParams(search);
  const parsed: Record<string, any> = {};
  params.forEach((value, key) => {
    parsed[key] = value;
  });
  return parsed;
};

export const parseValue = (value: string): string | number | (string | number)[] => {
  if (value.includes(",")) {
    return value.split(",").map((item) => (isNaN(+item) ? item : Number(item)));
  }
  return isNaN(+value) ? value : Number(value);
};

export const unFlattenObject = (data: Record<string, string>, arrayKeys: string[] = []): Record<string, unknown> => {
  const result: Record<string, any> = {};
  for (const key in data) {
    const keys = key.split(".");
    keys.reduce((acc, part, index) => {
      if (index === keys.length - 1) {
        const parsedValue = parseValue(data[key]);
        if (arrayKeys.includes(key)) {
          acc[part] = Array.isArray(parsedValue) ? parsedValue : [parsedValue];
        } else {
          acc[part] = parsedValue;
        }
      } else {
        acc[part] = acc[part] || {};
      }
      return acc[part];
    }, result);
  }
  return result;
};

const applyFilter =
  <T>(key: string, value: T | undefined) =>
  (queryObj: Record<string, unknown>): Record<string, unknown> => {
    if (value !== undefined) {
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          queryObj[`${key}.${subKey}`] = subValue;
        });
      } else if (Array.isArray(value)) {
        queryObj[key] = value.join(",");
      } else {
        queryObj[key] = value;
      }
    }
    return queryObj;
  };

type QueryObject = Record<string, unknown>;

export const updateQueryString = (queryObject: QueryObject) => {
  const queryObj: QueryObject = {};

  const updatedQueryObj = go<QueryObject, QueryObject>(
    queryObj,
    ...Object.keys(queryObject).map((key) => applyFilter(key, queryObject[key]))
  );

  const param = new URLSearchParams();
  Object.entries(updatedQueryObj).forEach(([key, value]) => {
    param.append(key, value as string);
  });

  return param.toString() ? `?${param.toString()}` : "";
};
