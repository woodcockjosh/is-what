export declare function isEmptyObject(payload: unknown): payload is {
    [K in string | symbol | number]: never;
};
