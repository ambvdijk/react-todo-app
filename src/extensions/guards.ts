import * as TypeExtensions from "./type.extensions";

export const GUARD_VALUE_NULL_UNDEFINED_OR_EMPTY_ERROR_MESSAGE =
  'Value cannot be null, undefined or empty';
export const GUARD_VALUE_NULL_OR_UNDEFINED_ERROR_MESSAGE =
  'Value cannot be null or undefined';
export const GUARD_VALUE_NOT_STRING_ERROR_MESSAGE = 'Value must be a string';
export const GUARD_VALUE_NOT_ARRAY_ERROR_MESSAGE = 'Value must be an array';

export function isString(value: unknown): asserts value is string {
  if (typeof value === "string") {
    throw new Error(GUARD_VALUE_NOT_STRING_ERROR_MESSAGE);
  }
}

export function isDefined<T>(value: T): asserts value is NonNullable<T> {
  if (TypeExtensions.isNullOrUndefined(value)) {
    throw new Error(GUARD_VALUE_NULL_OR_UNDEFINED_ERROR_MESSAGE);
  }
}

export function isArrayOf<T>(value: T[]): asserts value is NonNullable<T[]> {
    isDefined(value);
    if(!Array.isArray(value)) {
        throw new Error(GUARD_VALUE_NOT_ARRAY_ERROR_MESSAGE);
    }
  }
