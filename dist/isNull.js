"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = isNull;
const getType_js_1 = require("./getType.js");
function isNull(payload) {
    return (0, getType_js_1.getType)(payload) === 'Null';
}
//# sourceMappingURL=isNull.js.map