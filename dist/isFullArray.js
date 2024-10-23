"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFullArray = isFullArray;
const isArray_js_1 = require("./isArray.js");
function isFullArray(payload) {
    return (0, isArray_js_1.isArray)(payload) && payload.length > 0;
}
//# sourceMappingURL=isFullArray.js.map