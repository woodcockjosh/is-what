"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFullString = isFullString;
const isString_js_1 = require("./isString.js");
function isFullString(payload) {
    return (0, isString_js_1.isString)(payload) && payload !== '';
}
//# sourceMappingURL=isFullString.js.map