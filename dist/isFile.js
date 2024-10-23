"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFile = isFile;
const getType_js_1 = require("./getType.js");
function isFile(payload) {
    return (0, getType_js_1.getType)(payload) === 'File';
}
//# sourceMappingURL=isFile.js.map