"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSet = isSet;
const getType_js_1 = require("./getType.js");
function isSet(payload) {
    return (0, getType_js_1.getType)(payload) === 'Set';
}
//# sourceMappingURL=isSet.js.map