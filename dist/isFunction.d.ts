export type AnyFunction = (...args: any[]) => any;
export declare function isFunction(payload: unknown): payload is AnyFunction;
