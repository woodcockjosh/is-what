"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = isUndefined;
const getType_js_1 = require("./getType.js");
function isUndefined(payload) {
    return (0, getType_js_1.getType)(payload) === 'Undefined';
}
//# sourceMappingURL=isUndefined.js.map