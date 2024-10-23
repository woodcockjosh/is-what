"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeakMap = isWeakMap;
const getType_js_1 = require("./getType.js");
function isWeakMap(payload) {
    return (0, getType_js_1.getType)(payload) === 'WeakMap';
}
//# sourceMappingURL=isWeakMap.js.map