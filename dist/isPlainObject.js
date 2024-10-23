"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlainObject = isPlainObject;
const getType_js_1 = require("./getType.js");
function isPlainObject(payload) {
    if ((0, getType_js_1.getType)(payload) !== 'Object')
        return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
//# sourceMappingURL=isPlainObject.js.map