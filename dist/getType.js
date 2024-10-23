"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = getType;
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
//# sourceMappingURL=getType.js.map