"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRegExp = isRegExp;
const getType_js_1 = require("./getType.js");
function isRegExp(payload) {
    return (0, getType_js_1.getType)(payload) === 'RegExp';
}
//# sourceMappingURL=isRegExp.js.map