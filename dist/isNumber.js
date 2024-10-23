"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
const getType_js_1 = require("./getType.js");
function isNumber(payload) {
    return (0, getType_js_1.getType)(payload) === 'Number' && !isNaN(payload);
}
//# sourceMappingURL=isNumber.js.map