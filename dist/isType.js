"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = isType;
const getType_js_1 = require("./getType.js");
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
        throw new TypeError('Type is not a class');
    }
    const name = type.name;
    return (0, getType_js_1.getType)(payload) === name || Boolean(payload && payload.constructor === type);
}
//# sourceMappingURL=isType.js.map