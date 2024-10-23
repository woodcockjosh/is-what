"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNaNValue = isNaNValue;
const getType_js_1 = require("./getType.js");
function isNaNValue(payload) {
    return (0, getType_js_1.getType)(payload) === 'Number' && isNaN(payload);
}
//# sourceMappingURL=isNaNValue.js.map