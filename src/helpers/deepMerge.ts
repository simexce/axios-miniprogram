import { isPlainObject } from './isTypes';

export function deepMerge<T extends AnyObject>(...objs: T[]): T {
  const result: AnyObject = {};

  for (const obj of objs) {
    for (const [key, val] of Object.entries(obj)) {
      if (isPlainObject(val)) {
        const rVal = result[key];
        result[key] = isPlainObject(rVal)
          ? deepMerge(rVal, val)
          : deepMerge(val);
      } else {
        result[key] = val;
      }
    }
  }

  return result as T;
}