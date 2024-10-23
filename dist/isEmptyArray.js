"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyArray = isEmptyArray;
const isArray_js_1 = require("./isArray.js");
function isEmptyArray(payload) {
    return (0, isArray_js_1.isArray)(payload) && payload.length === 0;
}
//# sourceMappingURL=isEmptyArray.js.map