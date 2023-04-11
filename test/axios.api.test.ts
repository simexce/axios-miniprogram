import { describe, test, expect } from 'vitest';
import Axios from '@/core/Axios';
import { CancelToken, isCancel } from '@/core/cancel';
import { isAxiosError } from '@/core/createError';
import { createAdapter } from '@/adapter';
import axios from '@/axios';
import defaults from '@/defaults';

describe('src/axios.ts', () => {
  test('应该有这些静态属性', () => {
    expect(axios.Axios).toBe(Axios);
    expect(axios.CancelToken).toBe(CancelToken);
    expect(axios.create).toBeTypeOf('function');
    expect(axios.createAdapter).toBe(createAdapter);
    expect(axios.isCancel).toBe(isCancel);
    expect(axios.isAxiosError).toBe(isAxiosError);
  });

  test('应该可以创建实例', () => {
    const instance = axios.create({
      baseURL: 'http://api.com',
    });

    expect(instance.defaults).toEqual({
      ...defaults,
      baseURL: 'http://api.com',
    });
    expect(instance.interceptors).toBeTypeOf('object');
    expect(instance.getUri).toBeTypeOf('function');
    expect(instance.fork).toBeTypeOf('function');
    expect(instance.request).toBeTypeOf('function');

    [...Axios.as, ...Axios.asp, ...Axios.asd].forEach((k) => {
      expect(instance[k]).toBeTypeOf('function');
    });
  });
});