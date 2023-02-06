import * as TypeExtensions from "./type.extensions";

export const isNullOrUndefinedOrEmpty = <T>(value: T[]): boolean => {
  if (TypeExtensions.isNullOrUndefined(value)) {
    return true;
  }
  return Array.isArray(value) && !value.length;
};

export const isNotNullOrUndefinedOrEmpty = <T>(value: T[]): boolean => {
  return isNullOrUndefinedOrEmpty(value) === false;
};
