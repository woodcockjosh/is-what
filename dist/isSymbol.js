"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbol = isSymbol;
const getType_js_1 = require("./getType.js");
function isSymbol(payload) {
    return (0, getType_js_1.getType)(payload) === 'Symbol';
}
//# sourceMappingURL=isSymbol.js.map