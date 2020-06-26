/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
export declare function getType(payload: any): string;
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export declare function isUndefined(payload: any): payload is undefined;
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
export declare function isNull(payload: any): payload is null;
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
export declare function isPlainObject(payload: any): payload is {
    [key: string]: any;
};
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
export declare function isObject(payload: any): payload is {
    [key: string]: any;
};
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
export declare function isAnyObject(payload: any): payload is {
    [key: string]: any;
};
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
export declare function isObjectLike<T extends object>(payload: any): payload is T;
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
export declare function isFunction(payload: any): payload is Function;
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export declare function isArray(payload: any): payload is any[];
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isString(payload: any): payload is string;
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isFullString(payload: any): payload is string;
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isEmptyString(payload: any): payload is string;
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
export declare function isNumber(payload: any): payload is number;
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
export declare function isBoolean(payload: any): payload is boolean;
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
export declare function isRegExp(payload: any): payload is RegExp;
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map}
 */
export declare function isMap(payload: any): payload is Map<any, any>;
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap}
 */
export declare function isWeakMap(payload: any): payload is WeakMap<any, any>;
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set}
 */
export declare function isSet(payload: any): payload is Set<any>;
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet}
 */
export declare function isWeakSet(payload: any): payload is WeakSet<any>;
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
export declare function isSymbol(payload: any): payload is symbol;
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
export declare function isDate(payload: any): payload is Date;
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
export declare function isBlob(payload: any): payload is Blob;
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
export declare function isFile(payload: any): payload is File;
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise}
 */
export declare function isPromise(payload: any): payload is Promise<any>;
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
export declare function isError(payload: any): payload is Error;
/**
 * Returns whether the payload is `NaN` but also a `number`
 *
 * @param {*} payload
 * @returns {payload is typeof NaN}
 */
export declare function isNaNValue(payload: any): payload is typeof NaN;
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
export declare function isPrimitive(payload: any): payload is boolean | null | undefined | number | string | symbol;
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
export declare function isNullOrUndefined(payload: any): payload is null | undefined;
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
export declare function isType<T extends Function>(payload: any, type: T): payload is T;
