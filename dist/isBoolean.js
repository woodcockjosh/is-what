"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = isBoolean;
const getType_js_1 = require("./getType.js");
function isBoolean(payload) {
    return (0, getType_js_1.getType)(payload) === 'Boolean';
}
//# sourceMappingURL=isBoolean.js.map