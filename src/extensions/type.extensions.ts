export const typeOfNull = "Null";
export const typeOfUndefined = "Undefined";
export const typeOfNumber = "Number";
export const typeOfFunction = "Function";
export const typeOfString = "String";

export const isTypeOf = <T>(item: T, type: string): item is T =>
  Object.prototype.toString.call(item) === `[object ${type}]`;

export const isUndefined = <T>(item: T | undefined): item is undefined =>
  isTypeOf(item, typeOfUndefined);

export const isNull = <T>(item: T | null): item is null => isTypeOf(item, typeOfNull);

export const isNullOrUndefined = <T>(
  item: T | undefined | null
): item is null | undefined => isUndefined(item) || isNull(item);

export const isNotNullOrUndefined = <T>(item: T): item is NonNullable<T> =>
  isNullOrUndefined(item) === false;
