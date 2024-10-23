import { AnyFunction } from './isFunction.js';
export type AnyClass = new (...args: unknown[]) => unknown;
export declare function isType<T extends AnyFunction | AnyClass>(payload: unknown, type: T): payload is T;
