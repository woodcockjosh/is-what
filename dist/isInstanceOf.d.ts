import { AnyClass } from './isType.js';
type GlobalClassName = {
    [K in keyof typeof globalThis]: (typeof globalThis)[K] extends AnyClass ? K : never;
}[keyof typeof globalThis];
export declare function isInstanceOf<T extends AnyClass>(value: unknown, class_: T): value is T;
export declare function isInstanceOf<K extends GlobalClassName>(value: unknown, className: K): value is (typeof globalThis)[K];
export declare function isInstanceOf(value: unknown, className: string): value is object;
export {};
