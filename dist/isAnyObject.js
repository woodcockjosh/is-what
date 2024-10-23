"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnyObject = isAnyObject;
const getType_js_1 = require("./getType.js");
function isAnyObject(payload) {
    return (0, getType_js_1.getType)(payload) === 'Object';
}
//# sourceMappingURL=isAnyObject.js.map