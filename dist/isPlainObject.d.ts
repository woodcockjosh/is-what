export type PlainObject = {
    [key in string | number | symbol]: unknown;
};
export declare function isPlainObject(payload: unknown): payload is PlainObject;
