"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = isEmptyObject;
const isPlainObject_js_1 = require("./isPlainObject.js");
function isEmptyObject(payload) {
    return (0, isPlainObject_js_1.isPlainObject)(payload) && Object.keys(payload).length === 0;
}
//# sourceMappingURL=isEmptyObject.js.map