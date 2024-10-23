"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = isArray;
const getType_js_1 = require("./getType.js");
function isArray(payload) {
    return (0, getType_js_1.getType)(payload) === 'Array';
}
//# sourceMappingURL=isArray.js.map