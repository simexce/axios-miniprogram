const _toString = Object.prototype.toString;

export function isNull(value: any): value is null {
  return value === null;
}

export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

export function isString(value: any): value is string {
  return (
    typeof value === 'string' || _toString.call(value) === '[object String]'
  );
}

export function isPlainObject(value: any): value is object & AnyObject {
  return _toString.call(value) === '[object Object]';
}

export function isArray<T = unknown>(value: any): value is T[] {
  return Array.isArray(value);
}

export function isEmptyArray<T = unknown>(value: any): value is [] {
  return isArray<T>(value) && value.length === 0;
}

export function isDate(date: any): date is Date {
  return _toString.call(date) === '[object Date]';
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction<T extends Function>(value: any): value is T {
  return typeof value === 'function';
}