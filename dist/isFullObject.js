"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFullObject = isFullObject;
const isPlainObject_js_1 = require("./isPlainObject.js");
function isFullObject(payload) {
    return (0, isPlainObject_js_1.isPlainObject)(payload) && Object.keys(payload).length > 0;
}
//# sourceMappingURL=isFullObject.js.map