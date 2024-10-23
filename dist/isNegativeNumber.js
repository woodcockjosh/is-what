"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNegativeNumber = isNegativeNumber;
const isNumber_js_1 = require("./isNumber.js");
function isNegativeNumber(payload) {
    return (0, isNumber_js_1.isNumber)(payload) && payload < 0;
}
//# sourceMappingURL=isNegativeNumber.js.map