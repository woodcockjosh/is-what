"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBlob = isBlob;
const getType_js_1 = require("./getType.js");
function isBlob(payload) {
    return (0, getType_js_1.getType)(payload) === 'Blob';
}
//# sourceMappingURL=isBlob.js.map