"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOneOf = isOneOf;
function isOneOf(a, b, c, d, e) {
    return (value) => a(value) || b(value) || (!!c && c(value)) || (!!d && d(value)) || (!!e && e(value));
}
//# sourceMappingURL=isOneOf.js.map