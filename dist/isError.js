"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = isError;
const getType_js_1 = require("./getType.js");
function isError(payload) {
    return (0, getType_js_1.getType)(payload) === 'Error' || payload instanceof Error;
}
//# sourceMappingURL=isError.js.map