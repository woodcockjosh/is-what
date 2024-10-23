"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrimitive = isPrimitive;
const isBoolean_js_1 = require("./isBoolean.js");
const isNull_js_1 = require("./isNull.js");
const isNumber_js_1 = require("./isNumber.js");
const isString_js_1 = require("./isString.js");
const isSymbol_js_1 = require("./isSymbol.js");
const isUndefined_js_1 = require("./isUndefined.js");
function isPrimitive(payload) {
    return ((0, isBoolean_js_1.isBoolean)(payload) ||
        (0, isNull_js_1.isNull)(payload) ||
        (0, isUndefined_js_1.isUndefined)(payload) ||
        (0, isNumber_js_1.isNumber)(payload) ||
        (0, isString_js_1.isString)(payload) ||
        (0, isSymbol_js_1.isSymbol)(payload));
}
//# sourceMappingURL=isPrimitive.js.map