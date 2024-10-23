"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstanceOf = isInstanceOf;
const getType_js_1 = require("./getType.js");
const isType_js_1 = require("./isType.js");
function isInstanceOf(value, classOrClassName) {
    if (typeof classOrClassName === 'function') {
        for (let p = value; p; p = Object.getPrototypeOf(p)) {
            if ((0, isType_js_1.isType)(p, classOrClassName)) {
                return true;
            }
        }
        return false;
    }
    else {
        for (let p = value; p; p = Object.getPrototypeOf(p)) {
            if ((0, getType_js_1.getType)(p) === classOrClassName) {
                return true;
            }
        }
        return false;
    }
}
//# sourceMappingURL=isInstanceOf.js.map