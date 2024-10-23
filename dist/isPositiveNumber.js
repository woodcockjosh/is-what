"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositiveNumber = isPositiveNumber;
const isNumber_js_1 = require("./isNumber.js");
function isPositiveNumber(payload) {
    return (0, isNumber_js_1.isNumber)(payload) && payload > 0;
}
//# sourceMappingURL=isPositiveNumber.js.map