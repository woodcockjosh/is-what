"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromise = isPromise;
const getType_js_1 = require("./getType.js");
function isPromise(payload) {
    return (0, getType_js_1.getType)(payload) === 'Promise';
}
//# sourceMappingURL=isPromise.js.map