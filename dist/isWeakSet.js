"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeakSet = isWeakSet;
const getType_js_1 = require("./getType.js");
function isWeakSet(payload) {
    return (0, getType_js_1.getType)(payload) === 'WeakSet';
}
//# sourceMappingURL=isWeakSet.js.map