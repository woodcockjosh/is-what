"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = isString;
const getType_js_1 = require("./getType.js");
function isString(payload) {
    return (0, getType_js_1.getType)(payload) === 'String';
}
//# sourceMappingURL=isString.js.map